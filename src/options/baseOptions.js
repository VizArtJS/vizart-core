const baseOpt = () => {
  return {
      // v1.0
      chart: {
          type: null,
          width: null,
          height: null,
          className: null,
          margin: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
          },
          background: {
              color: null,
              opacity: 1,
          },
      },
      animation: {
          enabled: true,
          duration: {
              add: 500,
              update: 1000,
              remove: 500,
              color: 500,
              tooltip: 0,
              quickUpdate: 500,
          },
      },
      events: {
          render: null,
          update: null,
          drilldown: null,
          drillup: null,
          drillupall: null,
          selection: null,
      },
      color: {
          scheme: '', // string or array
          type: '',
          kmeans: true,
      },
      plots: {},
      tooltip: {
          className: null,
          enabled: true,
          duration: 500,
          offset: [30, 30],
          formatter: () => {},
      },
      data: {},

      // v2.0
      title: {
          enabled: false,
          text: null,
          style: '',
          align: 'center',
      },

      legend: {
          enabled: false,
      },
  };
};

export default baseOpt;
