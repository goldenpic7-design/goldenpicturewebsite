// Procedural high-resolution real estate image generator for Before/After interactive demos

export interface ImagePair {
  id: string;
  title: string;
  category: string;
  badge: string;
  before: string;
  after: string;
  description: string;
  tags: string[];
}

// Generate data URLs for realistic real estate scenes
export function createRealEstatePair(type: 'hdr' | 'twilight' | 'sky' | 'kitchen'): { before: string; after: string } {
  const width = 1200;
  const height = 800;

  // Helper function to render a scene to data URL
  const renderScene = (isAfter: boolean): string => {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    if (!ctx) return '';

    if (type === 'twilight') {
      // Villa Day to Dusk
      // Background Sky
      if (!isAfter) {
        // Flat overcast day sky
        const skyGrad = ctx.createLinearGradient(0, 0, 0, height * 0.5);
        skyGrad.addColorStop(0, '#8E9AAF');
        skyGrad.addColorStop(1, '#BAC4D4');
        ctx.fillStyle = skyGrad;
        ctx.fillRect(0, 0, width, height * 0.5);
      } else {
        // Glowing Twilight Sunset Sky
        const skyGrad = ctx.createLinearGradient(0, 0, 0, height * 0.55);
        skyGrad.addColorStop(0, '#100C2A');
        skyGrad.addColorStop(0.4, '#381658');
        skyGrad.addColorStop(0.7, '#8C315B');
        skyGrad.addColorStop(0.9, '#D4634B');
        skyGrad.addColorStop(1, '#F39C12');
        ctx.fillStyle = skyGrad;
        ctx.fillRect(0, 0, width, height * 0.55);

        // Subtle stars in sky
        ctx.fillStyle = '#FFFFFF';
        for (let i = 0; i < 50; i++) {
          const sx = (Math.sin(i * 99) * 0.5 + 0.5) * width;
          const sy = (Math.cos(i * 33) * 0.5 + 0.5) * (height * 0.3);
          const r = Math.random() * 1.5 + 0.5;
          ctx.beginPath();
          ctx.arc(sx, sy, r, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Lawn / Foreground
      const lawnGrad = ctx.createLinearGradient(0, height * 0.5, 0, height);
      if (!isAfter) {
        lawnGrad.addColorStop(0, '#2C3A27');
        lawnGrad.addColorStop(1, '#1A2417');
      } else {
        lawnGrad.addColorStop(0, '#1E4D2B');
        lawnGrad.addColorStop(1, '#0D2715');
      }
      ctx.fillStyle = lawnGrad;
      ctx.fillRect(0, height * 0.5, width, height * 0.5);

      // Swimming Pool
      ctx.fillStyle = isAfter ? '#00D2FF' : '#3A6B7C';
      ctx.beginPath();
      ctx.ellipse(width * 0.5, height * 0.75, width * 0.3, height * 0.1, 0, 0, Math.PI * 2);
      ctx.fill();

      if (isAfter) {
        // Water glow
        ctx.fillStyle = 'rgba(0, 210, 255, 0.25)';
        ctx.beginPath();
        ctx.ellipse(width * 0.5, height * 0.75, width * 0.35, height * 0.13, 0, 0, Math.PI * 2);
        ctx.fill();
      }

      // Luxury Modern Villa Structure
      ctx.fillStyle = isAfter ? '#1A1D24' : '#2A2D34';
      ctx.fillRect(width * 0.2, height * 0.25, width * 0.6, height * 0.35);

      // Glass Windows & Interior Lighting
      const windowWidth = width * 0.14;
      const windowHeight = height * 0.2;
      const windowPositions = [width * 0.25, width * 0.43, width * 0.61];

      windowPositions.forEach((xPos) => {
        if (!isAfter) {
          ctx.fillStyle = 'rgba(150, 165, 180, 0.4)';
          ctx.fillRect(xPos, height * 0.3, windowWidth, windowHeight);
          ctx.strokeStyle = '#444';
          ctx.lineWidth = 3;
          ctx.strokeRect(xPos, height * 0.3, windowWidth, windowHeight);
        } else {
          // Warm Golden Interior Glow
          const windowGlow = ctx.createRadialGradient(
            xPos + windowWidth / 2, height * 0.3 + windowHeight / 2, 5,
            xPos + windowWidth / 2, height * 0.3 + windowHeight / 2, windowWidth
          );
          windowGlow.addColorStop(0, '#FFF5CC');
          windowGlow.addColorStop(0.5, '#FFC845');
          windowGlow.addColorStop(1, '#E67E22');
          ctx.fillStyle = windowGlow;
          ctx.fillRect(xPos, height * 0.3, windowWidth, windowHeight);

          // Golden border light spill
          ctx.strokeStyle = '#FFD700';
          ctx.lineWidth = 2;
          ctx.strokeRect(xPos, height * 0.3, windowWidth, windowHeight);
        }
      });

      // Exterior Warm Up/Down Wall Lights (After only)
      if (isAfter) {
        const lightX = [width * 0.22, width * 0.41, width * 0.59, width * 0.78];
        lightX.forEach(lx => {
          const spotGrad = ctx.createRadialGradient(lx, height * 0.27, 2, lx, height * 0.27, 80);
          spotGrad.addColorStop(0, 'rgba(255, 215, 0, 0.9)');
          spotGrad.addColorStop(0.4, 'rgba(255, 180, 50, 0.4)');
          spotGrad.addColorStop(1, 'rgba(255, 180, 50, 0)');
          ctx.fillStyle = spotGrad;
          ctx.beginPath();
          ctx.arc(lx, height * 0.27, 80, 0, Math.PI * 2);
          ctx.fill();
        });
      }

    } else if (type === 'hdr') {
      // Living Room HDR
      // Room Wall Background
      ctx.fillStyle = isAfter ? '#1E222D' : '#141720';
      ctx.fillRect(0, 0, width, height);

      // Floor (Hardwood)
      const floorGrad = ctx.createLinearGradient(0, height * 0.6, 0, height);
      if (!isAfter) {
        floorGrad.addColorStop(0, '#3A281C');
        floorGrad.addColorStop(1, '#1E140C');
      } else {
        floorGrad.addColorStop(0, '#8C5A38');
        floorGrad.addColorStop(1, '#4A2C17');
      }
      ctx.fillStyle = floorGrad;
      ctx.fillRect(0, height * 0.6, width, height * 0.4);

      // Big Architectural Window on Left
      const winX = width * 0.08;
      const winY = height * 0.15;
      const winW = width * 0.35;
      const winH = height * 0.55;

      if (!isAfter) {
        // Blown out white overexposed window
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(winX, winY, winW, winH);
      } else {
        // Balanced window view: Beautiful garden & blue sky
        const winViewGrad = ctx.createLinearGradient(winX, winY, winX, winY + winH);
        winViewGrad.addColorStop(0, '#4A90E2');
        winViewGrad.addColorStop(0.6, '#A1C4FD');
        winViewGrad.addColorStop(0.6, '#2E7D32');
        winViewGrad.addColorStop(1, '#1B5E20');
        ctx.fillStyle = winViewGrad;
        ctx.fillRect(winX, winY, winW, winH);

        // Window Frame
        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = 6;
        ctx.strokeRect(winX, winY, winW, winH);
        ctx.beginPath();
        ctx.moveTo(winX + winW / 2, winY);
        ctx.lineTo(winX + winW / 2, winY + winH);
        ctx.stroke();
      }

      // Luxury Sofa
      const sofaX = width * 0.48;
      const sofaY = height * 0.52;
      const sofaW = width * 0.44;
      const sofaH = height * 0.25;

      ctx.fillStyle = isAfter ? '#E2E8F0' : '#475569';
      ctx.beginPath();
      ctx.roundRect(sofaX, sofaY, sofaW, sofaH, 16);
      ctx.fill();

      // Sofa cushions & pillows
      ctx.fillStyle = isAfter ? '#E5B849' : '#334155';
      ctx.beginPath();
      ctx.roundRect(sofaX + 20, sofaY - 20, 70, 70, 10);
      ctx.fill();
      ctx.beginPath();
      ctx.roundRect(sofaX + sofaW - 90, sofaY - 20, 70, 70, 10);
      ctx.fill();

      // Designer Chandelier Light
      if (isAfter) {
        const lightGlow = ctx.createRadialGradient(width * 0.7, height * 0.25, 10, width * 0.7, height * 0.25, 250);
        lightGlow.addColorStop(0, 'rgba(255, 245, 205, 0.95)');
        lightGlow.addColorStop(0.3, 'rgba(229, 184, 73, 0.3)');
        lightGlow.addColorStop(1, 'rgba(229, 184, 73, 0)');
        ctx.fillStyle = lightGlow;
        ctx.beginPath();
        ctx.arc(width * 0.7, height * 0.25, 250, 0, Math.PI * 2);
        ctx.fill();
      }

    } else if (type === 'sky') {
      // Sky Replacement & Lawn Enhancement
      if (!isAfter) {
        // Overcast Gloomy Sky
        const skyGrad = ctx.createLinearGradient(0, 0, 0, height * 0.55);
        skyGrad.addColorStop(0, '#7A869A');
        skyGrad.addColorStop(1, '#B0B9C6');
        ctx.fillStyle = skyGrad;
        ctx.fillRect(0, 0, width, height * 0.55);

        // Brown Patchy Dead Lawn
        const lawnGrad = ctx.createLinearGradient(0, height * 0.55, 0, height);
        lawnGrad.addColorStop(0, '#7A6B43');
        lawnGrad.addColorStop(1, '#4A3F23');
        ctx.fillStyle = lawnGrad;
        ctx.fillRect(0, height * 0.55, width, height * 0.45);
      } else {
        // Crisp Azure Blue Sky + White Clouds
        const skyGrad = ctx.createLinearGradient(0, 0, 0, height * 0.55);
        skyGrad.addColorStop(0, '#1E6091');
        skyGrad.addColorStop(0.5, '#1A759F');
        skyGrad.addColorStop(1, '#52B69A');
        ctx.fillStyle = skyGrad;
        ctx.fillRect(0, 0, width, height * 0.55);

        // Fluffy Clouds
        ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
        const cloudBubbles = [
          { x: 200, y: 120, r: 40 }, { x: 240, y: 100, r: 50 }, { x: 290, y: 120, r: 40 },
          { x: 750, y: 150, r: 45 }, { x: 800, y: 130, r: 60 }, { x: 860, y: 150, r: 45 }
        ];
        cloudBubbles.forEach(b => {
          ctx.beginPath();
          ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
          ctx.fill();
        });

        // Lush Green Vibrant Emerald Lawn
        const lawnGrad = ctx.createLinearGradient(0, height * 0.55, 0, height);
        lawnGrad.addColorStop(0, '#2D6A4F');
        lawnGrad.addColorStop(0.5, '#40916C');
        lawnGrad.addColorStop(1, '#1B4332');
        ctx.fillStyle = lawnGrad;
        ctx.fillRect(0, height * 0.55, width, height * 0.45);
      }

      // House Estate Facade
      ctx.fillStyle = isAfter ? '#FFF9EE' : '#D6D6D6';
      ctx.fillRect(width * 0.25, height * 0.25, width * 0.5, height * 0.4);

      // Roof
      ctx.fillStyle = isAfter ? '#2B2D42' : '#4A4E69';
      ctx.beginPath();
      ctx.moveTo(width * 0.2, height * 0.25);
      ctx.lineTo(width * 0.5, height * 0.08);
      ctx.lineTo(width * 0.8, height * 0.25);
      ctx.closePath();
      ctx.fill();

    } else {
      // Flash + Ambient Kitchen
      ctx.fillStyle = isAfter ? '#0F172A' : '#090D16';
      ctx.fillRect(0, 0, width, height);

      // Marble Kitchen Island
      const islandX = width * 0.2;
      const islandY = height * 0.45;
      const islandW = width * 0.6;
      const islandH = height * 0.4;

      const islandGrad = ctx.createLinearGradient(islandX, islandY, islandX + islandW, islandY + islandH);
      if (!isAfter) {
        islandGrad.addColorStop(0, '#94A3B8');
        islandGrad.addColorStop(1, '#475569');
      } else {
        islandGrad.addColorStop(0, '#FFFFFF');
        islandGrad.addColorStop(0.5, '#E2E8F0');
        islandGrad.addColorStop(1, '#CBD5E1');
      }
      ctx.fillStyle = islandGrad;
      ctx.fillRect(islandX, islandY, islandW, islandH);

      // Pendant Lights
      const lights = [width * 0.35, width * 0.5, width * 0.65];
      lights.forEach(lx => {
        ctx.strokeStyle = '#CBD5E1';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(lx, 0);
        ctx.lineTo(lx, height * 0.25);
        ctx.stroke();

        ctx.fillStyle = '#E5B849';
        ctx.beginPath();
        ctx.arc(lx, height * 0.26, 16, 0, Math.PI * 2);
        ctx.fill();

        if (isAfter) {
          const pGlow = ctx.createRadialGradient(lx, height * 0.26, 2, lx, height * 0.26, 90);
          pGlow.addColorStop(0, 'rgba(255, 220, 120, 0.9)');
          pGlow.addColorStop(1, 'rgba(255, 220, 120, 0)');
          ctx.fillStyle = pGlow;
          ctx.beginPath();
          ctx.arc(lx, height * 0.26, 90, 0, Math.PI * 2);
          ctx.fill();
        }
      });
    }

    // Add watermark / badge text to raw image canvas
    ctx.font = 'bold 24px "Plus Jakarta Sans", sans-serif';
    ctx.fillStyle = isAfter ? '#E5B849' : '#94A3B8';
    ctx.fillText(isAfter ? 'GOLDENPIC PRO • MLS READY' : 'RAW UNEDITED CAMERA FILE', 40, height - 40);

    return canvas.toDataURL('image/jpeg', 0.92);
  };

  return {
    before: renderScene(false),
    after: renderScene(true)
  };
}

// Preset Collection
export const DEMO_PAIRS: ImagePair[] = [
  {
    id: 'twilight',
    title: 'Day → Virtual Twilight Transformation',
    category: 'Twilight / Day to Dusk',
    badge: 'High Impact Real Estate Visual',
    ...createRealEstatePair('twilight'),
    description: 'Turn cold, gloomy overcast daylight exterior photos into warm, inviting, luxury twilight scenes with realistic window glow, pool reflections, and golden hour sky.',
    tags: ['Twilight Sky Replacement', 'Window Lighting Glow', 'Pool Reflection Enhancement', 'Color Temperature Tuning']
  },
  {
    id: 'hdr',
    title: 'Luxury Living Room HDR Enhancement',
    category: 'HDR Interior Enhancement',
    badge: 'MLS Favorite',
    ...createRealEstatePair('hdr'),
    description: 'Eliminate blown-out window light and dark interior shadows. Perfect exposure balance with rich natural wood tones and ambient warm lighting.',
    tags: ['Window Pull & Exposure', 'Highlight Balance', 'Color Cast Correction', 'Shadow Detail Recovery']
  },
  {
    id: 'sky',
    title: 'Sky Replacement & Lawn Restoration',
    category: 'Exterior Property Enhancement',
    badge: 'Included Free',
    ...createRealEstatePair('sky'),
    description: 'Replace dull grey skies with vibrant azure blue skies and transform patchy dead brown grass into lush, green MLS-ready curb appeal.',
    tags: ['Vibrant Sky Replacement', 'Lawn Greenery Enhancement', 'Perspective Straightening', 'De-cluttering']
  },
  {
    id: 'kitchen',
    title: 'Flash + Ambient Kitchen Blending',
    category: 'Interior Flash & Ambient',
    badge: 'Premium Finish',
    ...createRealEstatePair('kitchen'),
    description: 'Combine natural ambient room light with flash exposure for ultra-crisp marble textures, zero glare, and rich warm light fixture glows.',
    tags: ['Flash Ambient Fusion', 'Marble Glare Removal', 'Pendant Light Glow', 'Color Neutralization']
  }
];
