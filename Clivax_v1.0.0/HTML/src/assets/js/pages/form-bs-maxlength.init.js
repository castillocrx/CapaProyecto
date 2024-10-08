
"use strict";
$(function () {
    $("#maxlength-1").maxlength({
        placement: "bottom",
        warningClass: "badge badge-info",
        limitReachedClass: "badge badge-danger",
        alwaysShow: !1
    }),
        $("#maxlength-2").maxlength({
            placement: "bottom",
            warningClass: "badge badge-info",
            limitReachedClass: "badge badge-danger",
            alwaysShow: !1, threshold: 5
        }),
        $("#maxlength-3").maxlength({
            placement: "bottom",
            warningClass: "badge badge-info",
            limitReachedClass: "badge badge-danger",
            alwaysShow: !0
        }),
        $("#maxlength-4").maxlength({
            placement: "bottom",
            warningClass: "badge badge-info",
            limitReachedClass: "badge badge-danger",
            separator: " of ",
            preText: "You have ",
            postText: " chars remaining.",
            alwaysShow: !0,
            validate: !0
        }), $("#maxlength-5").maxlength({
            placement: "top-right",
            warningClass: "badge badge-info",
            limitReachedClass: "badge badge-danger"
        }),
        $("#maxlength-6").maxlength({
            placement: "bottom-right",
            warningClass: "badge badge-info",
            limitReachedClass: "badge badge-danger"
        }),
        $("#maxlength-7").maxlength({
            placement: "top-left",
            warningClass: "badge badge-info",
            limitReachedClass: "badge badge-danger"
        }),
        $("#maxlength-8").maxlength({
            placement: "bottom-left",
            warningClass: "badge badge-info",
            limitReachedClass: "badge badge-danger"
        })
});
