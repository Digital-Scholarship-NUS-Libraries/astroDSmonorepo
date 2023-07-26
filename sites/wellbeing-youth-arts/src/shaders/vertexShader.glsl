#version 300 es
out vec2 vUv;
const vec2 position[3]=vec2[](vec2(-1),vec2(3,-1),vec2(-1,3));
const vec2 uv[3]=vec2[](vec2(0),vec2(2,0),vec2(0,2));
void main(){
  gl_Position=vec4(position[gl_VertexID],0,1);
  vUv=uv[gl_VertexID];
}
