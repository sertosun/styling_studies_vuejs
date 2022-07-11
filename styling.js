const app = Vue.createApp({
  data() {
    return {
      box1Selected: false,
      box2Selected: false,
      box3Selected: false,
      box4Selected: false,
    };
  },
  computed: {
    box4Klassen() {
      return {
        active: this.box4Selected,
      };
    },
  },
  methods: {
    boxAuswahl(box) {
      switch (box) {
        case "1":
          this.box1Selected = !this.box1Selected;
          console.log("Box 1 Value: " + this.box1Selected);
          break;
        case "2":
          this.box2Selected = !this.box2Selected;
          console.log("Box 2 Value: " + this.box2Selected);
          break;
        case "3":
          this.box3Selected = !this.box3Selected;
          console.log("Box 3 Value: " + this.box3Selected);
          break;
        case "4":
          this.box4Selected = !this.box4Selected;
          console.log("Box 4 Value: " + this.box4Selected);
          break;
        default:
          console.log("Nothing worked");
      }

      //   if (box == "1") {
      //     this.box1Selected = true;
      //     console.log("Box 1 Value: " + this.box1Selected);
      //   } else if (box == "2") {
      //     this.box2Selected = true;
      //     console.log("Box 2 Value: " + this.box2Selected);
      //   } else if (box == "3") {
      //     this.box3Selected = true;
      //     console.log("Box 3 Value: " + this.box3Selected);
      //   } else if (box == "4") {
      //     this.box4Selected = true;
      //     console.log("Box 4 Value: " + this.box4Selected);
      //   } else {
      //     console.log("Nichts von dem wurde ausgewählt");
      //   }
    },
  },
});

app.mount("#styling");
