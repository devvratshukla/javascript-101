let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        // shows the current step
        console.log(this.step);
    }
};

ladder
    .up()
    .up()
    .down()
    .showStep();