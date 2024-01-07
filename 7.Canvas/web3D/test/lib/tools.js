// 归一化
function normalized(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i] * arr[i];
  }

  const middle = Math.sqrt(sum);

  for (let i = 0; i < arr.length; i++) {
    arr[i] /= middle;
  }
}

// 叉积函数
function cross(a, b) {
  return new Float32Array([
    a[1] * b[2] - a[2] * b[1],
    a[2] * b[0] - a[0] * b[2],
    a[0] * b[1] - a[1] * b[0],
  ]);
}

// 点积函数
function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

// 向量差
function minus(a, b) {
  return new Float32Array([a[0] - b[0], a[1] - b[1], a[2] - b[2]]);
}

// 获取视图矩阵
function getViewMatrix(eyex, eyey, eyez, lookAtx, lookAty, lookAtz, upx, upy, upz) {
  // 视点
  const eye = new Float32Array([eyex, eyey, eyez]);
  // 目标点
  const lookAt = new Float32Array([lookAtx, lookAty, lookAtz]);
  // 上方向
  const up = new Float32Array([upx, upy, upz]);


  // 确定z轴
  const z = minus(eye, lookAt);
  normalized(z);
  normalized(up);
  const x = cross(z, up);
  normalized(x);
  const y = cross(x, z);
  normalized(y);

  return new Float32Array([
    x[0], y[0], z[0], 0,
    x[1], y[1], z[1], 0,
    x[2], y[2], z[2], 0,
    -dot(x, eye), -dot(y, eye), -dot(z, eye), 1,
  ]);
}


// 正射投影
function getOtho(l, r, t, b, n, f) {
  return new Float32Array([
    2 / (r - l), 0, 0, 0,
    0, 2 / (t - b), 0, 0,
    0, 0, -2 / (f - n), 0,
    -(r + l) / (r - l), -(t + b) / (t - b), -(f + n) / (f - n), 1,
  ]);
}

// 矩阵复合函数
function mixMatrixs(A, B) {
  const result = new Float32Array(16);
  for (let i = 0; i < 4; i++) {
    result[i] = A[i] * B[0] + A[4 + i] * B[1] + A[8 + i] * B[2] + A[i + 12] * B[3];
    result[i + 4] = A[i] * B[4] + A[4 + i] * B[5] + A[8 + i] * B[6] + A[i + 12] * B[7];
    result[i + 8] = A[i] * B[8] + A[4 + i] * B[9] + A[8 + i] * B[10] + A[i + 12] * B[11];
    result[i + 12] = A[i] * B[12] + A[4 + i] * B[13] + A[8 + i] * B[14] + A[i + 12] * B[15];
  }

  return result;
}

// 获取透视投影矩阵
function getPerspective(fovy, aspect, far, near) {
  fovy = fovy * Math.PI / 180;
  return new Float32Array([
    1 / (Math.tan(fovy / 2) * aspect), 0, 0, 0,
    0, 1 / Math.tan(fovy / 2), 0, 0,
    0, 0, -(far + near) / (far - near), -(2 * far * near) / (far - near),
    0, 0, -1, 0,
  ]); 
}