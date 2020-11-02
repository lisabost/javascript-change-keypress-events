$(document).ready(function () {

    var jQueryTotal = 39.99;
    var donationTotal = 14.99;
        //event handlers
        $("#quantityJQuery").change(buyingJQuery);
        $("#quantityDonation").change(donatingJQuery);
        //other functions

        function buyingJQuery() {
            var jQueryPrice = 34.99;
            var numToBuy = parseInt($("#quantityJQuery").val());
            jQueryTotal = numToBuy * jQueryPrice;
            var grandTotal = jQueryTotal + donationTotal;
            $("#jQueryTotal").text(jQueryTotal);
            $("#grandTotal").text(grandTotal);

        }

    function donatingJQuery() {
        var jQueryDonationPrice = 14.99;
        var numToBuy = parseInt($("#quantityDonation").val());
        var donationTotal = numToBuy * jQueryDonationPrice;
        $("#donationTotal").text(donationTotal);
        var grandTotal = jQueryTotal + donationTotal;
        $("#grandTotal").text(grandTotal);
    }
    }
);