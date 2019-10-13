new Vue ({
    el: "#blendApp",
    data: {
        amountRed: 0,
        amountGreen: 0,
        amountBlue: 0

    },

    methods: {

    },

    computed: {
        RGBColorBlend: function () {
            return {
                backgroundColor: "rgb(" + this.amountRed + ", " +
                                        this.amountGreen + ", " +
                                        this.amountBlue + ")"
            }
        }
    },
})