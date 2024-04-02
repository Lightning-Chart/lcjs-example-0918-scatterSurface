const lcjs = require('@arction/lcjs')
const { lightningChart, Themes, PalettedFill, LUT, regularColorSteps, PointShape } = lcjs

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

        const lc = lightningChart()
        const chart = lc
            .Chart3D({
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
                start: { x: startX, z: startZ },
                step: { x: stepX, z: stepZ },
            })
            .setName('Surface')
            .invalidateHeightMap(surfaceDataY)

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

        const legend = chart.addLegendBox().add(chart)
    })
