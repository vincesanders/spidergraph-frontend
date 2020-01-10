export const serverToFront = (serverGraph) => {
    return{
        id: serverGraph.id,
        title: serverGraph.name,
        labels: serverGraph.axis,
        datasets: serverGraph.layer.map((dataset, layerIndex) => {
            return{
                label: dataset,
                data: serverGraph.axis.map((axis, axisIndex) => serverGraph.data[axisIndex][layerIndex])
            }
        }),
        notes: serverGraph.notes,
        theme: serverGraph.theme,

    }
}

export const frontToServer = (frontGraph, uid) => {
    return{
        name: frontGraph.title,
        owner: uid,
        theme: frontGraph.theme,
        notes: frontGraph.notes,
        axis: frontGraph.labels,
        layer: frontGraph.datasets.map(dataset =>  dataset.label),
        
        data: frontGraph.labels.map((label, labelIndex) => frontGraph.datasets.map(dataset => dataset.data[labelIndex])),
    }
}