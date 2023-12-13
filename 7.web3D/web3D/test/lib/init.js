/** 初始化着色器 */
function initShader(
  gl,
  VERTEX_SHADER_SOURCE,
  FRAGMENT_SHADER_SOURCE
) {

  if (!gl) {
    alert("无法初始化webgl");
    return;
  }

  // 创建着色器
  const vertexShader =
    gl.createShader(gl.VERTEX_SHADER);
  const fragmentShader =
    gl.createShader(gl.FRAGMENT_SHADER);

  // 关联着色器和着色器源码
  gl.shaderSource(vertexShader,
    VERTEX_SHADER_SOURCE);
  gl.shaderSource(fragmentShader,
    FRAGMENT_SHADER_SOURCE);

  // 编译着色器
  gl.compileShader(vertexShader);
  gl.compileShader(fragmentShader);

  // 创建program
  const program = gl.createProgram();

  // 指定program的着色器
  gl.attachShader(program,
    vertexShader);
  gl.attachShader(program,
    fragmentShader);

  // 关联着色器和program
  gl.linkProgram(program);

  // 使用着色器
  gl.useProgram(program);

  return program;

}