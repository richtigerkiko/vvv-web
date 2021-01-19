<template>
  <canvas
    id="timerclock"
    :width="canvasSize"
    :height="canvasSize"
    style="margin: 0px auto; display: block;"
  ></canvas>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Exercise} from '@/data/interfaces/Training'
import { getSecondsFromTimeString } from '@/functions/time/calctime.ts'

export default defineComponent({
  props: {
    exercise: {
        type: Object as PropType<Exercise>
    }
  },
  data() {
    return {
      canvasSize: 300,
      backgroundColor: "#fff",
      startTime: new Date()
    };
  },
  computed: {
    ctx(): CanvasRenderingContext2D {
      return (document.getElementById(
        "timerclock"
      )! as HTMLCanvasElement).getContext("2d")!;
    },
    radius(): number {
      return this.canvasSize / 2;
    },
    endTime(): Date {
      return new Date(this.startTime.getTime() + getSecondsFromTimeString(this.exercise!.exerciseDuration) * 1000);
    }
  },
  methods: {
    drawclock() {
      if (this.calcRemainingPercentOfTime() > 0){
        requestAnimationFrame(this.drawclock);
        this.ctx.canvas.width += 0;
        this.drawBackground();
        this.drawTimeFinishedIndicator();
        this.writeRemainingTimeText();
      }
      else{
          return this.$emit('countdownReady')
      }
    },
    drawBackground() {
      this.ctx.fillStyle = this.backgroundColor;
      this.ctx.beginPath();
      this.ctx.arc(this.radius, this.radius, this.radius, 0, 2 * Math.PI);
      this.ctx.stroke();
      this.ctx.fill();
    },
    drawTimeFinishedIndicator() {
      this.ctx.strokeStyle = "#647f87";
      this.ctx.lineWidth = 40;
      this.ctx.beginPath();
      this.ctx.arc(
        this.radius,
        this.radius,
        this.radius - 19.5,
        this.rad(270),
        this.percentToRad(this.calcRemainingPercentOfTime()),
        false
      );
      this.ctx.stroke();
    },
    writeRemainingTimeText() {
      this.ctx.font = "50px Open Sans";
      this.ctx.textAlign = "center";
      this.ctx.fillStyle = "#647f87";
      this.ctx.fillText(
        Math.floor(this.calcremainingSeconds()).toString(),
        this.radius - 1,
        this.radius - 15
      );
    },
    rad(deg: number): number {
      return (Math.PI / 180) * deg;
    },
    percentToRad(percent: number): number {
      return this.rad(270) + this.rad((360 * percent) / 100);
    },
    calcremainingSeconds(): number {
      const now = new Date();
      return (this.endTime.getTime() - now.getTime()) / 1000;
    },
    calcRemainingPercentOfTime(): number {
      const remainingSeconds = this.calcremainingSeconds();
      return (remainingSeconds / getSecondsFromTimeString(this.exercise!.exerciseDuration)) * 100;
    }
  },
  mounted() {
    this.drawclock();
  }
});
</script>