const BaseOpt = {
    // v1.0
    chart: {
        type: null,
        width: null,
        height:null,
        className: null,
        margin: {
            left: 20,
            right: 20,
            top: 20,
            bottom: 20
        },
        background: {
            color: null,
            opacity: 1
        },
    },
    animation:  {
        enabled: true,
        duration: {
            add: 500,
            update: 1000,
            remove: 500,
            color: 500,
            quickUpdate: 500,
        } ,
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
        schema : '', // string or array
        type: '',
        kmeans: true,
    },
    plots: {
    },
    tooltip: {
        className: null,
        enabled: true,
        duration: 500,
        formatter:  ()=> { }
    },
    data: {},

    // v2.0
    title: {
        enabled: false,
        text: null,
        style: '',
        align: "center"
    },

    legend: {
        enabled: false,
    },

    // credits: {
    //     enabled: true,
    //     href: 'http://www.smartsct.com',
    //     text: 'Powered By ExceedData',
    //     position: '',
    //     style: ''
    // },
    // noData : {
    //     enabled: false
    // },
    // loading: {
    //     hideDuration: 100,
    //     labelStyle: { "fontWeight": "bold", "position": "relative", "top": "45%" },
    //     showDuration: 100,
    //     style: ""
    // },



}


export default BaseOpt;
