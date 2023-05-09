"use strict";
let title;
let message;

title = "Molly's offers";
message = '<a href =\"sale.hrmtl\" > 25% off!</a>';

let title_div = document.getElementById('title');
title_div.innerText = title;

let note_div = document.getElementById('note');
note_div.innerHTML = message;
