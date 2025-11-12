const lcjs = require('@lightningchart/lcjs')
const { lightningChart, Themes, SolidFill, SolidLine, PalettedFill, LUT, regularColorSteps, PointShape, LegendPosition } = lcjs

fetch(`${new URL(document.head.baseURI).origin + new URL(document.head.baseURI).pathname}examples/assets/0918/precalc-surface.json`)
    .then((r) => r.json())
    .then((data) => {
        const {
            keyIntensity,
            startX,
            stepX,
            startZ,
            stepZ,
            valueRanges,
            surfaceResolution,
            surfaceDataY,
            surfaceDataIntensity,
            dataPoints,
        } = data

        const lc = lightningChart({
            resourcesBaseUrl: new URL(document.head.baseURI).origin + new URL(document.head.baseURI).pathname + 'resources/',
        })
        const chart = lc
            .Chart3D({
                legend: { position: LegendPosition.RightCenter },
                theme: Themes[new URLSearchParams(window.location.search).get('theme') || 'darkGold'] || undefined,
            })
            .setTitle('3D surface chart visualized from scatter data set')
        chart.getDefaultAxisX().setTitle('KPI X')
        chart.getDefaultAxisY().setTitle('KPI Y')
        chart.getDefaultAxisZ().setTitle('KPI Z')
        const pointSeries = chart
            .addPointSeries()
            .setName('Raw samples')
            .add(dataPoints)
            .setPointStyle((points) => points.setSize(5))

        const surface = chart
            .addSurfaceGridSeries({
                dataOrder: 'columns',
                columns: surfaceResolution,
                rows: surfaceResolution,
            })
            .setStart({ x: startX, z: startZ })
            .setStep({ x: stepX, z: stepZ })
            .setName('Surface')
            .invalidateHeightMap(surfaceDataY)
            .setContours({
                valueSource: 'intensity',
                levels: [
                    {
                        value: 0.003,
                        strokeStyle: new SolidLine({
                            thickness: 2,
                            fillStyle: new SolidFill({ color: chart.getTheme().examples.badGoodColorPalette.at(-1) }),
                        }),
                    },
                ],
            })

        if (keyIntensity) {
            surface.invalidateIntensityValues(surfaceDataIntensity).setFillStyle(
                new PalettedFill({
                    lookUpProperty: 'value',
                    lut: new LUT({
                        interpolate: true,
                        steps: regularColorSteps(
                            valueRanges[keyIntensity].min,
                            valueRanges[keyIntensity].max,
                            chart.getTheme().examples.badGoodColorPalette,
                        ),
                        units: 'KPI 4',
                    }),
                }),
            )
        }
    })
