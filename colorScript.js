new Vue ({
    el: "#blendApp",
    data: {
        amountRed: 0,
        amountGreen: 0,
        amountBlue: 0

    },

    methods: {
        convertToHexa: function() {
            let r = parseInt(this.amountRed).toString(16).toUpperCase();
            return r;
            
        }
    },

    computed: {
        RGBColorBlend: function () {
            return {
                backgroundColor: "rgb(" + this.amountRed + ", " +
                                        this.amountGreen + ", " +
                                        this.amountBlue + ")"
            }
        },

        convertToHex: function() {
            
            let r = parseInt(this.amountRed).toString(16).toUpperCase();
            let g = parseInt(this.amountGreen).toString(16).toUpperCase();
            let b = parseInt(this.amountBlue).toString(16).toUpperCase();
            return "#" + r + g + b;
            
        }
    }
})