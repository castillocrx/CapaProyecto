
"use strict";
$(function () {
    var i = "rtl" === $("html").attr("dir") ? "left" : "right";
    $("#datetimepicker-1").datetimepicker({
        pickerPosition: i,
        todayHighlight: !0
    }),
        $("#datetimepicker-2").datetimepicker({
            pickerPosition: i,
            todayHighlight: !0, todayBtn: "linked"
        }),
        $("#datetimepicker-3").datetimepicker({
            pickerPosition: i,
            todayHighlight: !0,
            showMeridian: !0
        }),
        $("#datetimepicker-4").datetimepicker({
            pickerPosition: i,
            todayHighlight: !0,
            daysOfWeekDisabled: "0,6"
        }),
        $("#datetimepicker-5").datetimepicker({
            pickerPosition: i,
            todayHighlight: !0,
            minView: 2,
            format: "mm/dd/yyyy"
        }),
        $("#datetimepicker-6").datetimepicker({
            pickerPosition: i,
            todayHighlight: !0,
            minView: 0,
            startView: 1,
            maxView: 1,
            showMeridian: !0,
            format: "hh:ii P"
        }),
        $("#datetimepicker-7").datetimepicker({
            pickerPosition: i,
            language: "ru"
        }),
        $("#datetimepicker-8").datetimepicker({
            pickerPosition: i,
            inline: !0
        }),
        $("#datetimepicker-9").datetimepicker({
            pickerPosition: i,
            todayHighlight: !0,
            minView: 0,
            startView: 1,
            maxView: 1,
            format: "hh:ii P",
            inline: !0
        })
});