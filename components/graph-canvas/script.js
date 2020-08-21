import Chart from "chart.js";
import Utils from "~/scripts/utils";

export default {
  name: "GraphCanvas",
  props: {
    gtype: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    labels: {
      type: Array,
      required: true,
    },
    datasets: {
      type: Array,
      required: true,
    },
    goptions: {
      type: Object,
      default: () => {},
    },
  },
  watch: {
    labels: {
      handler(val) {
        this.$data.chart.destroy();
        this.$data.chart_data.labels = val;

        this.updateCanvas();
      },
      deep: true,
    },
    datasets: {
      handler(val) {
        this.$data.chart.destroy();
        this.$data.chart_data.datasets = val;

        this.updateCanvas();
      },
      deep: true,
    },
  },
  data() {
    return {
      type: this.$props.gtype,
      chart_data: {
        labels: this.$props.labels,
        datasets: this.$props.datasets,
      },
      options: this.$props.goptions,
    };
  },
  methods: {
    updateCanvas() {
      const ctx = document.getElementById(this.$props.id).getContext("2d");
      document.chart = this.$data.chart = new Chart(ctx, {
        type: this.$data.type,
        data: this.$data.chart_data,
        options: this.$data.options,
      });
    },
  },
  mounted() {
    this.updateCanvas();
    let self = this;
    document.getElementById(this.$props.id).onclick = function (evt) {
      setTimeout(() => {
        const { layerX, layerY } = evt;
        let legendHitBoxes = JSON.parse(JSON.stringify(document.chart.legend.legendHitBoxes));

        for (let i = 0; i < legendHitBoxes.length; i++) {
          if (
            Utils.inRange(layerX, legendHitBoxes[i].left, legendHitBoxes[i].left + legendHitBoxes[i].width) &&
            Utils.inRange(layerY, legendHitBoxes[i].top, legendHitBoxes[i].top + legendHitBoxes[i].height)
          ) {
            self.$emit("switchVisibility", i);
          }
        }
      }, 50);
    };
  },
};
