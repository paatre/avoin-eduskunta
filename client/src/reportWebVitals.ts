import { ReportHandler } from 'web-vitals';

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      /**
       * Cumulative Layout Shift
       *
       * "the largest burst of layout shift scores for every unexpected layout
       * shift that occurs during the entire lifespan of a page"
       *
       * From https://web.dev/cls/
       */
      getCLS(onPerfEntry);
      /**
       * First Input Delay
       *
       * "the time from when a user first interacts with a page to the time
       * when the browser is actually able to begin processing event handlers
       * in response to that interaction"
       *
       * From https://web.dev/fid/
       */
      getFID(onPerfEntry);
      /**
       * First Contentful Paint
       *
       * "the time from when the page starts loading to when any part of the
       * page's content is rendered on the screen"
       *
       * From https://web.dev/fcp/
       */
      getFCP(onPerfEntry);
      /**
       * Largest Contentful Paint
       *
       * "the render time of the largest image or text block visible within the
       * viewport, relative to when the page first started loading"
       *
       * From https://web.dev/lcp/
       */
      getLCP(onPerfEntry);
      /**
       * Time to First Byte
       *
       * "the time between the request for a resource and when the first byte
       * of a response begins to arrive"
       *
       * From https://web.dev/ttfb/
       */
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
