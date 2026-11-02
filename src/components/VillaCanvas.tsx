"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { Maximize2, Moon, Sun, Sunrise, RotateCcw } from "lucide-react";

interface VillaCanvasProps {
  onHotspotSelect?: (title: string, detail: string) => void;
  scrollY?: number;
}

type LightingMode = "daylight" | "sunset" | "evening";

export default function VillaCanvas({ onHotspotSelect }: VillaCanvasProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [lightingMode, setLightingMode] = useState<LightingMode>("daylight");
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);
  const [isRotating, setIsRotating] = useState(true);

  // References for scene elements to update when mode changes
  const sceneRef = useRef<THREE.Scene | null>(null);
  const lightsRef = useRef<{
    dirLight: THREE.DirectionalLight;
    ambient: THREE.AmbientLight;
    interiorLights: THREE.PointLight[];
    poolLight: THREE.PointLight;
  } | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // SCENE SETUP - Clean Warm Light Architectural Space
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Soft fog matching the warm cream background (#FAF7F2 = 0xFAF7F2)
    scene.fog = new THREE.Fog(0xfaf7f2, 28, 85);

    const camera = new THREE.PerspectiveCamera(
      40,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(24, 13, 26);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.08;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2 - 0.04;
    controls.minDistance = 14;
    controls.maxDistance = 56;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;
    controls.target.set(0, 3.2, 0);
    controlsRef.current = controls;

    // =========================================================================
    // ARCHITECTURAL LIGHTING SETUP
    // =========================================================================
    // Soft warm ambient bounce
    const ambientLight = new THREE.AmbientLight(0xfcf7ed, 1.4);
    scene.add(ambientLight);

    // Warm sun directional key light
    const dirLight = new THREE.DirectionalLight(0xfff6e5, 2.6);
    dirLight.position.set(26, 32, 22);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;
    dirLight.shadow.bias = -0.0001;
    dirLight.shadow.camera.near = 10;
    dirLight.shadow.camera.far = 80;
    dirLight.shadow.camera.left = -20;
    dirLight.shadow.camera.right = 20;
    dirLight.shadow.camera.top = 20;
    dirLight.shadow.camera.bottom = -20;
    scene.add(dirLight);

    // Warm glowing interior lights shining through glass windows
    const interiorLight1 = new THREE.PointLight(0xffc966, 5.0, 20);
    interiorLight1.position.set(-1, 2.5, 0);
    scene.add(interiorLight1);

    const interiorLight2 = new THREE.PointLight(0xffd27a, 4.5, 18);
    interiorLight2.position.set(3, 6.2, 0);
    scene.add(interiorLight2);

    const interiorLight3 = new THREE.PointLight(0xffbe58, 4.0, 16);
    interiorLight3.position.set(-5, 2.6, 2);
    scene.add(interiorLight3);

    // Pool turquoise water light
    const poolLight = new THREE.PointLight(0x38bdf8, 3.2, 14);
    poolLight.position.set(4, 0.6, 7.5);
    scene.add(poolLight);

    lightsRef.current = {
      dirLight,
      ambient: ambientLight,
      interiorLights: [interiorLight1, interiorLight2, interiorLight3],
      poolLight,
    };

    // =========================================================================
    // MODERN WHITE LUXURY VILLA ARCHITECTURAL MATERIALS
    // =========================================================================
    // 1. Pristine architectural white stucco / facade
    const whiteStuccoMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.28,
      metalness: 0.04,
    });

    // 2. Warm travertine / limestone terrace slabs
    const travertineMaterial = new THREE.MeshStandardMaterial({
      color: 0xf5eedf,
      roughness: 0.6,
      metalness: 0.05,
    });

    // 3. Deep espresso bronze architectural trims, mullions & louvers
    const espressoTrimMaterial = new THREE.MeshStandardMaterial({
      color: 0x241a13,
      roughness: 0.35,
      metalness: 0.45,
    });

    // 4. Large floor-to-ceiling glass windows (realistic transmission & reflections)
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xe8f4f8,
      transmission: 0.94,
      opacity: 0.88,
      transparent: true,
      roughness: 0.03,
      ior: 1.52,
      thickness: 0.8,
      reflectivity: 0.96,
      side: THREE.DoubleSide,
    });

    // 5. Warm interior natural oak & leather furnishings
    const interiorOakMaterial = new THREE.MeshStandardMaterial({
      color: 0xb5824e,
      roughness: 0.45,
      metalness: 0.08,
    });

    // 6. Crystal azure reflection pool water
    const poolWaterMaterial = new THREE.MeshStandardMaterial({
      color: 0x228b9c,
      roughness: 0.08,
      metalness: 0.2,
      transparent: true,
      opacity: 0.82,
    });

    // =========================================================================
    // PROCEDURAL 3D ARCHITECTURAL MODEL
    // =========================================================================
    const villaGroup = new THREE.Group();

    // Base Ground Plateau (Warm cream terrace blending into page canvas)
    const groundGeo = new THREE.PlaneGeometry(160, 160);
    const groundMat = new THREE.MeshStandardMaterial({
      color: 0xfaf8f5,
      roughness: 0.85,
      metalness: 0.02,
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.05;
    ground.receiveShadow = true;
    villaGroup.add(ground);

    // Multi-tier Travertine Podium Base
    const podiumGeo = new THREE.BoxGeometry(28, 0.8, 24);
    const podium = new THREE.Mesh(podiumGeo, travertineMaterial);
    podium.position.set(0, 0.4, 0);
    podium.receiveShadow = true;
    villaGroup.add(podium);

    // Stepped pool deck terrace
    const terraceGeo = new THREE.BoxGeometry(22, 0.3, 10);
    const terrace = new THREE.Mesh(terraceGeo, travertineMaterial);
    terrace.position.set(2, 0.95, 6);
    terrace.receiveShadow = true;
    villaGroup.add(terrace);

    // -------------------------------------------------------------------------
    // GROUND FLOOR: Glass Living Salon & Dining Pavilion
    // -------------------------------------------------------------------------
    // White structural ceiling slab
    const groundFloorSlabGeo = new THREE.BoxGeometry(19, 0.45, 14.5);
    const groundFloorCeiling = new THREE.Mesh(groundFloorSlabGeo, whiteStuccoMaterial);
    groundFloorCeiling.position.set(-1, 4.3, 0);
    groundFloorCeiling.castShadow = true;
    groundFloorCeiling.receiveShadow = true;
    villaGroup.add(groundFloorCeiling);

    // Large panoramic glass curtain walls (front & back)
    const groundGlassFrontGeo = new THREE.BoxGeometry(17, 3.4, 0.08);
    const groundGlassFront = new THREE.Mesh(groundGlassFrontGeo, glassMaterial);
    groundGlassFront.position.set(-1, 2.35, 6.2);
    villaGroup.add(groundGlassFront);

    const groundGlassBackGeo = new THREE.BoxGeometry(17, 3.4, 0.08);
    const groundGlassBack = new THREE.Mesh(groundGlassBackGeo, glassMaterial);
    groundGlassBack.position.set(-1, 2.35, -6.2);
    villaGroup.add(groundGlassBack);

    const groundGlassSideGeo = new THREE.BoxGeometry(0.08, 3.4, 12);
    const groundGlassSide = new THREE.Mesh(groundGlassSideGeo, glassMaterial);
    groundGlassSide.position.set(-9.4, 2.35, 0);
    villaGroup.add(groundGlassSide);

    // Ultra-slim espresso mullions & columns
    const colGeo = new THREE.BoxGeometry(0.28, 3.5, 0.28);
    const colCoords = [
      [-9.3, 2.35, 6.2],
      [7.4, 2.35, 6.2],
      [-9.3, 2.35, -6.2],
      [7.4, 2.35, -6.2],
      [-1, 2.35, 6.2],
      [-1, 2.35, -6.2],
    ];
    colCoords.forEach(([x, y, z]) => {
      const col = new THREE.Mesh(colGeo, espressoTrimMaterial);
      col.position.set(x, y, z);
      col.castShadow = true;
      villaGroup.add(col);
    });

    // Interior Warm Living Pavilion Elements (Visible through glass)
    const loungeSofaGeo = new THREE.BoxGeometry(4.2, 0.65, 2.2);
    const loungeSofa = new THREE.Mesh(loungeSofaGeo, interiorOakMaterial);
    loungeSofa.position.set(-3.5, 1.15, 0.5);
    villaGroup.add(loungeSofa);

    const coffeeTableGeo = new THREE.BoxGeometry(2.4, 0.35, 1.2);
    const coffeeTable = new THREE.Mesh(coffeeTableGeo, espressoTrimMaterial);
    coffeeTable.position.set(-3.5, 0.95, -1.2);
    villaGroup.add(coffeeTable);

    // Warm glowing sculptural floor lamp
    const floorLampGeo = new THREE.CylinderGeometry(0.04, 0.04, 2.4);
    const floorLamp = new THREE.Mesh(floorLampGeo, espressoTrimMaterial);
    floorLamp.position.set(-0.8, 2.0, -1.5);
    villaGroup.add(floorLamp);

    const lampShadeGeo = new THREE.ConeGeometry(0.4, 0.45, 16);
    const lampShadeMat = new THREE.MeshBasicMaterial({ color: 0xffd27a });
    const lampShade = new THREE.Mesh(lampShadeGeo, lampShadeMat);
    lampShade.position.set(-0.8, 3.2, -1.5);
    villaGroup.add(lampShade);

    // -------------------------------------------------------------------------
    // UPPER FLOOR: Iconic Cantilevered Modern White Suite Box
    // -------------------------------------------------------------------------
    const upperGroup = new THREE.Group();
    upperGroup.position.set(2.2, 4.5, -0.4);

    // Floor slab of cantilever
    const upperFloorGeo = new THREE.BoxGeometry(20.5, 0.45, 10.5);
    const upperFloor = new THREE.Mesh(upperFloorGeo, whiteStuccoMaterial);
    upperFloor.position.set(0, 0.22, 0);
    upperFloor.castShadow = true;
    upperGroup.add(upperFloor);

    // Overhanging thin architectural roof slab
    const upperRoofGeo = new THREE.BoxGeometry(22.8, 0.4, 11.8);
    const upperRoof = new THREE.Mesh(upperRoofGeo, whiteStuccoMaterial);
    upperRoof.position.set(0, 4.25, 0);
    upperRoof.castShadow = true;
    upperRoof.receiveShadow = true;
    upperGroup.add(upperRoof);

    // Espresso architectural fascia perimeter trim
    const fasciaGeo = new THREE.BoxGeometry(23.0, 0.08, 12.0);
    const fascia = new THREE.Mesh(fasciaGeo, espressoTrimMaterial);
    fascia.position.set(0, 4.45, 0);
    upperGroup.add(fascia);

    // Floor-to-ceiling panoramic glass walls on cantilever
    const upperGlassLongGeo = new THREE.BoxGeometry(20.0, 3.6, 0.08);
    const upperGlassFront = new THREE.Mesh(upperGlassLongGeo, glassMaterial);
    upperGlassFront.position.set(0, 2.25, 5.1);
    upperGroup.add(upperGlassFront);

    const upperGlassBack = new THREE.Mesh(upperGlassLongGeo, glassMaterial);
    upperGlassBack.position.set(0, 2.25, -5.1);
    upperGroup.add(upperGlassBack);

    const upperGlassEndGeo = new THREE.BoxGeometry(0.08, 3.6, 10.2);
    const upperGlassRight = new THREE.Mesh(upperGlassEndGeo, glassMaterial);
    upperGlassRight.position.set(10.1, 2.25, 0);
    upperGroup.add(upperGlassRight);

    // Upper interior luxury master suite & warm wood wall
    const bedGeo = new THREE.BoxGeometry(3.6, 0.65, 4.2);
    const bed = new THREE.Mesh(bedGeo, interiorOakMaterial);
    bed.position.set(5.5, 0.8, 0);
    upperGroup.add(bed);

    // Modern vertical privacy louvers (espresso bronze)
    for (let i = 0; i < 9; i++) {
      const louverGeo = new THREE.BoxGeometry(0.1, 3.6, 0.7);
      const louver = new THREE.Mesh(louverGeo, espressoTrimMaterial);
      louver.position.set(-8.8 + i * 0.95, 2.25, -5.2);
      upperGroup.add(louver);
    }

    villaGroup.add(upperGroup);

    // -------------------------------------------------------------------------
    // INFINITY REFLECTION LAP POOL & TERRACE
    // -------------------------------------------------------------------------
    const poolGroup = new THREE.Group();
    poolGroup.position.set(4, 0.85, 8.0);

    // White limestone pool trough
    const poolBorderGeo = new THREE.BoxGeometry(11.5, 0.65, 5.8);
    const poolBorder = new THREE.Mesh(poolBorderGeo, whiteStuccoMaterial);
    poolBorder.position.set(0, -0.15, 0);
    poolBorder.receiveShadow = true;
    poolGroup.add(poolBorder);

    // Clear Turquoise Water Surface
    const waterGeo = new THREE.PlaneGeometry(10.8, 5.1);
    const water = new THREE.Mesh(waterGeo, poolWaterMaterial);
    water.rotation.x = -Math.PI / 2;
    water.position.y = 0.22;
    poolGroup.add(water);

    // Clear Glass Infinity Spillover Balustrade
    const glassEdgeGeo = new THREE.BoxGeometry(10.8, 0.55, 0.08);
    const glassEdge = new THREE.Mesh(glassEdgeGeo, glassMaterial);
    glassEdge.position.set(0, 0.35, 2.55);
    poolGroup.add(glassEdge);

    villaGroup.add(poolGroup);

    // -------------------------------------------------------------------------
    // LANDSCAPE: Sculptural Minimalist Zen Cypress Trees
    // -------------------------------------------------------------------------
    const createTree = (x: number, z: number, scale = 1) => {
      const treeGroup = new THREE.Group();
      treeGroup.position.set(x, 0.8, z);

      const trunkGeo = new THREE.CylinderGeometry(0.08 * scale, 0.16 * scale, 3 * scale, 8);
      const trunkMat = new THREE.MeshStandardMaterial({ color: 0x4a3b30, roughness: 0.9 });
      const trunk = new THREE.Mesh(trunkGeo, trunkMat);
      trunk.position.y = 1.5 * scale;
      treeGroup.add(trunk);

      const leafMat = new THREE.MeshStandardMaterial({
        color: 0x2b4638,
        roughness: 0.8,
        metalness: 0.05,
      });

      const cluster1 = new THREE.Mesh(new THREE.DodecahedronGeometry(1.15 * scale), leafMat);
      cluster1.position.set(0.2 * scale, 2.8 * scale, 0.2 * scale);
      treeGroup.add(cluster1);

      const cluster2 = new THREE.Mesh(new THREE.DodecahedronGeometry(0.85 * scale), leafMat);
      cluster2.position.set(-0.3 * scale, 2.1 * scale, -0.2 * scale);
      treeGroup.add(cluster2);

      return treeGroup;
    };

    villaGroup.add(createTree(-10.5, 4.5, 1.2));
    villaGroup.add(createTree(-11.5, -3.5, 1.4));
    villaGroup.add(createTree(11.5, -7.5, 1.0));

    scene.add(villaGroup);

    // -------------------------------------------------------------------------
    // SOFT FLOATING GOLDEN LIGHT DUST MOTES
    // -------------------------------------------------------------------------
    const particleCount = 180;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 44;
      positions[i * 3 + 1] = Math.random() * 18 + 0.5;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 44;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.24,
      color: 0xd4af37,
      transparent: true,
      opacity: 0.35,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);
    particlesRef.current = particles;

    // -------------------------------------------------------------------------
    // ANIMATION & RENDER LOOP
    // -------------------------------------------------------------------------
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      controls.update();

      // Gentle floating particles
      if (particlesRef.current) {
        const pos = particlesRef.current.geometry.attributes.position.array as Float32Array;
        for (let i = 0; i < particleCount; i++) {
          pos[i * 3 + 1] += Math.sin(elapsedTime * 0.5 + i) * 0.008;
          if (pos[i * 3 + 1] > 20) pos[i * 3 + 1] = 0.5;
        }
        particlesRef.current.geometry.attributes.position.needsUpdate = true;
      }

      // Water subtle ripple
      water.position.y = 0.22 + Math.sin(elapsedTime * 2.0) * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  // UPDATE LIGHTING MODE
  useEffect(() => {
    if (!lightsRef.current || !sceneRef.current) return;
    const { dirLight, ambient, interiorLights, poolLight } = lightsRef.current;

    if (lightingMode === "daylight") {
      dirLight.color.setHex(0xfff6e5);
      dirLight.intensity = 2.6;
      dirLight.position.set(26, 32, 22);
      ambient.color.setHex(0xfcf7ed);
      ambient.intensity = 1.4;
      interiorLights.forEach((l) => {
        l.color.setHex(0xffc966);
        l.intensity = 4.8;
      });
      poolLight.color.setHex(0x38bdf8);
      poolLight.intensity = 3.2;
      sceneRef.current.fog?.color.setHex(0xfaf8f5);
    } else if (lightingMode === "sunset") {
      dirLight.color.setHex(0xffb26b);
      dirLight.intensity = 2.8;
      dirLight.position.set(-24, 18, 16);
      ambient.color.setHex(0xfdecd2);
      ambient.intensity = 1.3;
      interiorLights.forEach((l) => {
        l.color.setHex(0xffa726);
        l.intensity = 6.2;
      });
      poolLight.color.setHex(0x22d3ee);
      poolLight.intensity = 4.0;
      sceneRef.current.fog?.color.setHex(0xf8f1e5);
    } else if (lightingMode === "evening") {
      dirLight.color.setHex(0x93c5fd);
      dirLight.intensity = 1.2;
      dirLight.position.set(10, 24, -18);
      ambient.color.setHex(0xeae3d7);
      ambient.intensity = 1.0;
      interiorLights.forEach((l) => {
        l.color.setHex(0xffbe53);
        l.intensity = 7.5;
      });
      poolLight.color.setHex(0x06b6d4);
      poolLight.intensity = 5.0;
      sceneRef.current.fog?.color.setHex(0xf3ece0);
    }
  }, [lightingMode]);

  const toggleAutoRotate = () => {
    if (!controlsRef.current) return;
    controlsRef.current.autoRotate = !controlsRef.current.autoRotate;
    setIsRotating(controlsRef.current.autoRotate);
  };

  const resetCamera = () => {
    if (!controlsRef.current || !cameraRef.current) return;
    controlsRef.current.target.set(0, 3.2, 0);
    cameraRef.current.position.set(24, 13, 26);
    controlsRef.current.update();
  };

  const focusPreset = (view: "penthouse" | "pool" | "aerial") => {
    if (!controlsRef.current || !cameraRef.current) return;
    if (view === "penthouse") {
      controlsRef.current.target.set(2.2, 6.2, 0);
      cameraRef.current.position.set(14, 9, 12);
      setActiveHotspot(1);
      onHotspotSelect?.(
        "Cantilevered Glass Suite",
        "Suspended panoramic master suite with acoustic floor-to-ceiling glass and warm natural oak detailing."
      );
    } else if (view === "pool") {
      controlsRef.current.target.set(4, 1.2, 8);
      cameraRef.current.position.set(12, 4.2, 16);
      setActiveHotspot(2);
      onHotspotSelect?.(
        "Sunken Courtyard & Lap Pool",
        "Crystal azure infinity pool bordered with travertine limestone and transparent safety balustrade."
      );
    } else if (view === "aerial") {
      controlsRef.current.target.set(0, 2, 0);
      cameraRef.current.position.set(2, 36, 18);
      setActiveHotspot(3);
      onHotspotSelect?.(
        "Architectural Villa Masterplan",
        "Dual-axis rotated volume architecture maximizing solar orientation, cross ventilation, and scenic views."
      );
    }
    controlsRef.current.update();
  };

  return (
    <div className="relative w-full h-full min-h-[580px] lg:min-h-[700px] select-none">
      {/* 3D WebGL Canvas Container */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Floating HUD: Interactive Hotspot Overlay Badge */}
      <div className="absolute top-6 left-6 flex flex-col gap-2 pointer-events-auto">
        <div className="bg-white/85 backdrop-blur-md px-3.5 py-1.5 rounded-full flex items-center gap-2 border border-[#E5DFD3] shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1F1610] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1F1610]"></span>
          </span>
          <span className="text-[11px] font-sans font-semibold tracking-wider uppercase text-[#1F1610]">
            Interactive 3D Architectural Villa
          </span>
        </div>
      </div>

      {/* Floating HUD: Viewpoint Presets & Lighting Controls */}
      <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 pointer-events-none">
        {/* Architectural Viewpoint Presets */}
        <div className="bg-white/90 backdrop-blur-md p-1.5 rounded-2xl flex items-center gap-1.5 pointer-events-auto border border-[#E5DFD3] shadow-lg">
          <button
            onClick={() => focusPreset("penthouse")}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium tracking-wide transition-all cursor-pointer ${
              activeHotspot === 1
                ? "bg-[#1F1610] text-[#FAF8F5]"
                : "text-[#544234] hover:text-[#1F1610] hover:bg-[#F5F2EA]"
            }`}
          >
            Glass Suite
          </button>
          <button
            onClick={() => focusPreset("pool")}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium tracking-wide transition-all cursor-pointer ${
              activeHotspot === 2
                ? "bg-[#1F1610] text-[#FAF8F5]"
                : "text-[#544234] hover:text-[#1F1610] hover:bg-[#F5F2EA]"
            }`}
          >
            Infinity Pool
          </button>
          <button
            onClick={() => focusPreset("aerial")}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium tracking-wide transition-all cursor-pointer ${
              activeHotspot === 3
                ? "bg-[#1F1610] text-[#FAF8F5]"
                : "text-[#544234] hover:text-[#1F1610] hover:bg-[#F5F2EA]"
            }`}
          >
            Masterplan
          </button>
        </div>

        {/* Lighting Mode Selector & Orbit Toggles */}
        <div className="bg-white/90 backdrop-blur-md p-1.5 rounded-2xl flex items-center gap-2 pointer-events-auto border border-[#E5DFD3] shadow-lg">
          <div className="flex items-center bg-[#F5F2EA] p-1 rounded-xl">
            <button
              onClick={() => setLightingMode("daylight")}
              title="Daylight Architecture"
              className={`p-2 rounded-lg transition-all cursor-pointer ${
                lightingMode === "daylight"
                  ? "bg-[#1F1610] text-[#FAF8F5] shadow-sm"
                  : "text-[#735D4C] hover:text-[#1F1610]"
              }`}
            >
              <Sun className="w-4 h-4" />
            </button>
            <button
              onClick={() => setLightingMode("sunset")}
              title="Sunset Golden Hour"
              className={`p-2 rounded-lg transition-all cursor-pointer ${
                lightingMode === "sunset"
                  ? "bg-[#1F1610] text-[#FAF8F5] shadow-sm"
                  : "text-[#735D4C] hover:text-[#1F1610]"
              }`}
            >
              <Sunrise className="w-4 h-4" />
            </button>
            <button
              onClick={() => setLightingMode("evening")}
              title="Evening Warm Interior Glow"
              className={`p-2 rounded-lg transition-all cursor-pointer ${
                lightingMode === "evening"
                  ? "bg-[#1F1610] text-[#FAF8F5] shadow-sm"
                  : "text-[#735D4C] hover:text-[#1F1610]"
              }`}
            >
              <Moon className="w-4 h-4" />
            </button>
          </div>

          <div className="h-4 w-[1px] bg-[#E0D9CD]" />

          {/* Toggle Auto Rotation */}
          <button
            onClick={toggleAutoRotate}
            title={isRotating ? "Pause 360° Orbit" : "Resume 360° Orbit"}
            className={`p-2 rounded-xl transition-all cursor-pointer ${
              isRotating
                ? "bg-[#1F1610] text-[#FAF8F5]"
                : "text-[#735D4C] hover:text-[#1F1610] hover:bg-[#F5F2EA]"
            }`}
          >
            <RotateCcw className={`w-4 h-4 ${isRotating ? "animate-spin" : ""}`} style={{ animationDuration: "14s" }} />
          </button>

          {/* Reset Camera */}
          <button
            onClick={resetCamera}
            title="Reset Architectural View"
            className="p-2 rounded-xl text-[#735D4C] hover:text-[#1F1610] hover:bg-[#F5F2EA] transition-all cursor-pointer"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
