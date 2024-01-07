// import * as THREE from 'three'
import * as THREE from '../node_modules/three/build/three.module.js';
import * as dat from '../node_modules/dat.gui/build/dat.gui.module.js';

const removeAndAdd = (item, value, camera, mesh, scene, marterial, controls) => {
  const position = mesh.plane.position;
  const rotation = mesh.plane.rotation;
  scene.remove(mesh.plane);
  const arg = [];
  for (const key in controls) {
    arg.push(controls[key])
  }
  mesh.plane = createMaterial(new THREE[item.type](...arg), marterial);
  console.log(...position)
  mesh.plane.position.set(...position);
  mesh.plane.rotation.set(rotation.x, rotation.y, rotation.z);
  mesh.plane.receiveShadow = true;
  scene.add(mesh.plane);
}

const createMaterial = (geometry, marterial) => {
  return new THREE.Mesh(geometry, marterial);
}

const getMeshValue = (extend, name) => {
  return {
    extends: extend,
    getValue: (item) => item.parameters[name],
    setValue: (...arg) => removeAndAdd(...arg),
  }
}

const basicType = {
  color: {
    method: 'addColor',
    getValue: item => item.color.getStyle(),
    setValue: (item, value) => item.color.set(value),
  },
  intensity: {
    method: 'add',
    extends: [0, 2],
    getValue: item => item.intensity,
    setValue: (item, value) => item.intensity = value,
  },
  distance: {
    method: 'add',
    getValue: item => item.distance,
    setValue: (item, value) => item.distance = value,
  },
  angle: {
    method: 'add',
    getValue: item => item.angle,
    setValue: (item, value) => item.angle = value,
  },
  penumbra: {
    method: 'add',
    getValue: item => item.penumbra,
    setValue: (item, value) => item.penumbra = value,
  },
  decay: {
    method: 'add',
    extends: [0, 20],
    getValue: item => item.decay,
    setValue: (item, value) => item.decay = value,
  },
  opacity: {
    method: 'add',
    extends: [0, 1],
    getValue: item => item.opacity,
    setValue: (item, value) => item.opacity = value,
  },
  transparent: {
    getValue: item => item.transparent,
    setValue: (item, value) => item.transparent = value,
  },
  wireframe: {
    getValue: item => item.wireframe,
    setValue: (item, value) => item.wireframe = value,
  },
  visible: {
    getValue: item => item.visible,
    setValue: (item, value) => item.visible = value,
  },
  emissive: {
    method: 'addColor',
    getValue: item => item.emissive.getHex(),
    setValue: (item, value, camera) => item.emissive.setHex(value),
  },
  side: {
    extends: [['front', 'back', 'double']],
    getValue: () => 'front',
    setValue: (item, value) => {
      switch (value) {
        case 'front':
          item.side = THREE.FrontSide;
          break;
        case 'back':
          item.side = THREE.BackSide;
          break;
        case 'double':
          item.side = THREE.DoubleSide;
          break;
      }
    }
  },
  alpha: {
    extends: [0, 1],
    getValue: (item) => item.uniforms.a.value,
    setValue: (item, value) => item.uniforms.a.value = value,
  },
  width: getMeshValue([0, 20], 'width'),
  height: getMeshValue([0, 30], 'height'),
}

const itemType = {
  "SpotLight": ['color', 'intensity', 'distance', 'angle', 'penumbra', 'decay'],
  "AmbientLight": ['color', 'intensity'],
  "DirectionalLight": ['color', 'intensity', 'distance', 'angle', 'penumbra', 'decay'],
  "PointLight": ['color', 'intensity', 'distance', 'decay'],
  "MeshBasicMaterial": ['color', 'opacity', 'transparent', 'wireframe', 'visible'],
  "MeshLambertMaterial": ['color', 'opacity', 'transparent', 'wireframe', 'visible', 'emissive', 'side'],
  "ShaderMaterial": ['alpha'],
  "PlaneGeometry": ['width', 'height', 'widthSegment', 'heightSegment']
}
export default function initControls(item, camera, mesh, scene, marterial) {
  console.log(item, mesh)
  const typeList = itemType[item.type];
  const controls = {};

  if (!typeList || !typeList.length) {
    return;
  }

  const gui = new dat.GUI();


  for (let i = 0; i < typeList.length; i++) {
    const child = basicType[typeList[i]];
    if (child) {
      controls[typeList[i]] = child.getValue(item, camera);

      const childExtends = child.extends || [];

      gui[child.method || 'add'](
        controls,
        typeList[i],
        ...childExtends
      ).onChange((value) => {
        child.setValue(item, value, camera, mesh, scene, marterial, controls);
      });
    }

  }
}