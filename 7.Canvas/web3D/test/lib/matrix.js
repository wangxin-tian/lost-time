function getTranslateMatrix(x = 0, y = 0, z = 0) {
  return new Float32Array([
    1.0,
    0.0,
    0.0,
    x,
    0.0,
    1.0,
    0.0,
    y,
    0.0,
    0.0,
    1.0,
    z,
    0.0,
    0.0,
    0.0,
    1.0,
  ]);
}

function getScaleMatrix(x = 0, y = 0, z = 0) {
  return new Float32Array([
    x,
    0.0,
    0.0,
    0.0,
    0.0,
    y,
    0.0,
    0.0,
    0.0,
    0.0,
    z,
    0.0,
    0.0,
    0.0,
    0.0,
    1.0,
  ]);
}

function getRotateMatrix(deg) {
  return new Float32Array([
    Math.cos(deg),
    -Math.sin(deg),
    0.0,
    0.0,
    Math.sin(deg),
    Math.cos(deg),
    0.0,
    0.0,
    0.0,
    0.0,
    1.0,
    0.0,
    0.0,
    0.0,
    0.0,
    1.0,
  ]);
}