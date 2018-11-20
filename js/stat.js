'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 50;
var SHIFT_XY = 10;
var INDENT = 30;
var BOTTOM_INDENT = 250;
var WIDTH_BAR = 40;
var FONT_GAP = 16;
var MAX_HEIGHT_BAR = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + SHIFT_XY, CLOUD_Y + SHIFT_XY, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', CLOUD_X + INDENT, INDENT);
  ctx.fillText('Список результатов:', CLOUD_X + INDENT, INDENT + FONT_GAP);

  ctx.fillStyle = '#000';

  var maxTime = getMaxElement(times);
  var heightBar = (MAX_HEIGHT_BAR * times[i]) / maxTime;

  // (MAX_HEIGHT_BAR * times[i]) / maxTime

  for (var i = 0; i < players.length; i++) {
    ctx.fillRect(CLOUD_X + INDENT + (GAP + WIDTH_BAR) * i, (INDENT + FONT_GAP + GAP) - heightBar, WIDTH_BAR, heightBar);
    ctx.fillText(players[i], CLOUD_X + INDENT + (GAP + WIDTH_BAR) * i, BOTTOM_INDENT);
  }


  /* ctx.fillRect(CLOUD_X + INDENT + (GAP + WIDTH_BAR) * playerIndex, INDENT + FONT_GAP + GAP, WIDTH_BAR, MAX_HEIGHT_BAR);
  ctx.fillText('Вы', CLOUD_X + INDENT + (GAP + WIDTH_BAR) * playerIndex, BOTTOM_INDENT);

  ctx.fillRect(CLOUD_X + INDENT + (GAP + WIDTH_BAR) * playerIndex, INDENT + FONT_GAP + GAP, WIDTH_BAR, MAX_HEIGHT_BAR);
  ctx.fillText('Кекс', CLOUD_X + INDENT + (GAP + WIDTH_BAR) * playerIndex, BOTTOM_INDENT);

  ctx.fillRect(CLOUD_X + INDENT + (GAP + WIDTH_BAR) * playerIndex, INDENT + FONT_GAP + GAP, WIDTH_BAR, MAX_HEIGHT_BAR);
  ctx.fillText('Катя', CLOUD_X + INDENT + (GAP + WIDTH_BAR) * playerIndex, BOTTOM_INDENT);

  ctx.fillRect(CLOUD_X + INDENT + (GAP + WIDTH_BAR) * playerIndex, INDENT + FONT_GAP + GAP, WIDTH_BAR, MAX_HEIGHT_BAR);
  ctx.fillText('Игорь', CLOUD_X + INDENT + (GAP + WIDTH_BAR) * playerIndex, BOTTOM_INDENT);*/
};
