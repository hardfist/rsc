import collectTimingsPlugin from 'collect-timings';
export default {
    cache :{
        idleTimeout: 1000
    },
    plugins: [
        new collectTimingsPlugin({})
    ]
}