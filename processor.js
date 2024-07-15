function processor(transmission) {
    if (!transmission.includes("::")) {
        throw new Error('Data is invalid ; should contain "::"');
    }
    if (!transmission.includes(">") && !transmission.includes("<")) {
        throw new Error('Data is invalid ; should contain ">" and "<"');
    }
    if (!transmission.includes("<")) {
        throw new Error('Data is invalid ; should contain "<"');
    }
    if (!transmission.includes(">")) {
        throw new Error('Data is invalid ; should contain ">"');
    }
    
    let parts = transmission.split("::");
    let id = parts[0];
    let rawData = parts[1];
    let rawDataNumers = transmission.split(/<|>/);
    
    if (isNaN(id)){
        throw new Error('Data is invalid ; id cannot be converted in a number');
    }
    if (isNaN(rawDataNumers[1])){
        throw new Error('Data is invalid ; rawDataNumers must contain only number');
    }

    return {
        id: Number(parts[0]),
        rawData: rawData,
        rawDataNumers: Number(rawDataNumers[1])
    };
}

module.exports = processor;