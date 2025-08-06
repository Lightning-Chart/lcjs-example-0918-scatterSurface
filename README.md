# JavaScript 3D Surface Chart from Scatter Data

![JavaScript 3D Surface Chart from Scatter Data](scatterSurface-darkGold.png)

This demo application belongs to the set of examples for LightningChart JS, data visualization library for JavaScript.

LightningChart JS is entirely GPU accelerated and performance optimized charting library for presenting massive amounts of data. It offers an easy way of creating sophisticated and interactive charts and adding them to your website or web application.

The demo can be used as an example or a seed project. Local execution requires the following steps:

-   Make sure that relevant version of [Node.js](https://nodejs.org/en/download/) is installed
-   Open the project folder in a terminal:

          npm install              # fetches dependencies
          npm start                # builds an application and starts the development server

-   The application is available at _http://localhost:8080_ in your browser, webpack-dev-server provides hot reload functionality.


## Description

Example showing use of Surface charts to visualize 3 dimensional scatter data sets.

Surface chart allow visualization of relations between 3 different data properties at once.
This can be extended to 4 properties at once by adding in dynamic coloring.

This example loads in a prepared data set of different data properties and displays the raw points using a 3D Point Series and the resulting surface using a 3D Surface Series.

3D scatter data sets can be translated to surface data sets, but the operation is slightly heavy. In this case, this has been done before hand and the static example data has been saved in the surface format.


## API Links

* [3D chart]
* [3D axis]
* [Point series 3D]


## Support

If you notice an error in the example code, please open an issue on [GitHub][0] repository of the entire example.

Official [API documentation][1] can be found on [LightningChart][2] website.

If the docs and other materials do not solve your problem as well as implementation help is needed, ask on [StackOverflow][3] (tagged lightningchart).

If you think you found a bug in the LightningChart JavaScript library, please contact sales@lightningchart.com.

Direct developer email support can be purchased through a [Support Plan][4] or by contacting sales@lightningchart.com.

[0]: https://github.com/Arction/
[1]: https://lightningchart.com/lightningchart-js-api-documentation/
[2]: https://lightningchart.com
[3]: https://stackoverflow.com/questions/tagged/lightningchart
[4]: https://lightningchart.com/support-services/

© LightningChart Ltd 2009-2022. All rights reserved.


[3D chart]: https://lightningchart.com/js-charts/api-documentation/v8.0.0/classes/Chart3D.html
[3D axis]: https://lightningchart.com/js-charts/api-documentation/v8.0.0/classes/Axis3D.html
[Point series 3D]: https://lightningchart.com/js-charts/api-documentation/v8.0.0/classes/PointSeries3D.html

