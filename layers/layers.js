var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Municipios_1 = new ol.format.GeoJSON();
var features_Municipios_1 = format_Municipios_1.readFeatures(json_Municipios_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipios_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipios_1.addFeatures(features_Municipios_1);
var lyr_Municipios_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Municipios_1, 
                style: style_Municipios_1,
                popuplayertitle: 'Municipios',
                interactive: true,
                title: '<img src="styles/legend/Municipios_1.png" /> Municipios'
            });
var format_Departamentos_2 = new ol.format.GeoJSON();
var features_Departamentos_2 = format_Departamentos_2.readFeatures(json_Departamentos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departamentos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamentos_2.addFeatures(features_Departamentos_2);
var lyr_Departamentos_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Departamentos_2, 
                style: style_Departamentos_2,
                popuplayertitle: 'Departamentos',
                interactive: false,
                title: '<img src="styles/legend/Departamentos_2.png" /> Departamentos'
            });
var format_ViasP2_3 = new ol.format.GeoJSON();
var features_ViasP2_3 = format_ViasP2_3.readFeatures(json_ViasP2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ViasP2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ViasP2_3.addFeatures(features_ViasP2_3);
var lyr_ViasP2_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ViasP2_3, 
                style: style_ViasP2_3,
                popuplayertitle: 'Vias P2',
                interactive: true,
                title: '<img src="styles/legend/ViasP2_3.png" /> Vias P2'
            });
var format_ViasP1_4 = new ol.format.GeoJSON();
var features_ViasP1_4 = format_ViasP1_4.readFeatures(json_ViasP1_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ViasP1_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ViasP1_4.addFeatures(features_ViasP1_4);
var lyr_ViasP1_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ViasP1_4, 
                style: style_ViasP1_4,
                popuplayertitle: 'Vias P1',
                interactive: true,
                title: '<img src="styles/legend/ViasP1_4.png" /> Vias P1'
            });
var group_Vias = new ol.layer.Group({
                                layers: [lyr_ViasP2_3,lyr_ViasP1_4,],
                                fold: 'close',
                                title: 'Vias'});

lyr_GoogleSatellite_0.setVisible(true);lyr_Municipios_1.setVisible(true);lyr_Departamentos_2.setVisible(true);lyr_ViasP2_3.setVisible(false);lyr_ViasP1_4.setVisible(false);
var layersList = [lyr_GoogleSatellite_0,lyr_Municipios_1,lyr_Departamentos_2,group_Vias];
lyr_Municipios_1.set('fieldAliases', {'DEPTO': 'DEPTO', 'PROVINCIA': 'PROVINCIA', 'MUNICIPIO': 'MUNICIPIO', });
lyr_Departamentos_2.set('fieldAliases', {'departamen': 'departamen', });
lyr_ViasP2_3.set('fieldAliases', {'NOMBRES': 'NOMBRES', });
lyr_ViasP1_4.set('fieldAliases', {'NOMBRES': 'NOMBRES', });
lyr_Municipios_1.set('fieldImages', {'DEPTO': 'TextEdit', 'PROVINCIA': 'TextEdit', 'MUNICIPIO': 'TextEdit', });
lyr_Departamentos_2.set('fieldImages', {'departamen': 'TextEdit', });
lyr_ViasP2_3.set('fieldImages', {'NOMBRES': 'TextEdit', });
lyr_ViasP1_4.set('fieldImages', {'NOMBRES': 'TextEdit', });
lyr_Municipios_1.set('fieldLabels', {'DEPTO': 'inline label - always visible', 'PROVINCIA': 'inline label - always visible', 'MUNICIPIO': 'inline label - always visible', });
lyr_Departamentos_2.set('fieldLabels', {'departamen': 'no label', });
lyr_ViasP2_3.set('fieldLabels', {'NOMBRES': 'inline label - always visible', });
lyr_ViasP1_4.set('fieldLabels', {'NOMBRES': 'inline label - always visible', });
lyr_ViasP1_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});