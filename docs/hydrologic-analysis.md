# Hydrologic Analysis

## 3.1 Overview

A new hydrologic model was prepared for the entire Leyden Creek
watershed, updating the hydrology for the existing and future land use
conditions, for the 2-, 5-, 10-, 25-, 50- and 100-year storm
frequencies. The Colorado Urban Hydrograph Procedure (CUHP v1.4.3), was
used to develop runoff hydrographs for each individual sub-watershed.
The hydrographs from each subwatershed were then routed using the EPA
Stormwater Management Model (SWMM), version 5.0.022 to determine
discharges at each design point.

The Leyden Creek watershed was divided into a total of 44 subwatersheds
encompassing 11.78 square miles. After correspondence with UDFCD it was
determined that the flow design points would be prioritized over
subwatershed size with sub-watersheds staying within the 3,000 acre
limits of CUHP.

Hydrologic routing generally followed the connectivity diagram presented
in the 2003 Hydrology Report by Boyle Engineering; however the basin
upstream of Leyden Lake was subdivided into 20 smaller basins, averaging
294 acres in sizes; whereas the Boyle study only included two
sub-watersheds for the same area.

The Blue Mountain Estates area contributed flow to the Leyden Creek
watershed during the September 2013 event. This area was analyzed to
determine whether to include it in the watershed for this study. Through
a 2-dimentional analysis in FLO-2D, it was determined that the
contributing flow was more of a result from erosion during the storm
than surface topography. Therefore, the area was not included in the
Leyden Creek watershed hydrology.

From field review, two sub-watersheds (L303, L321) in the 2003 Boyle
study were found to be non-tributary to Leyden Creek. Therefore, the
total watershed area of the current study is slightly less than that
used for past work (11.78 square miles versus 11.89 square miles).

## 3.2 Design Rainfall

One-hour rainfall depths were derived from the USDCM Figures RA-3
through RA-12 for the project area and compared with those used for past
studies. Generally there were minimal differences, and the past rainfall
depths were carried forward. 2-, 5-, and 25-year rainfall depths, not
provided in the previous studies, were determined from Figures RA-1,
RA-2, and RA-4 (USDCM). Areal adjustments were not applied since only a
minor portion of the watershed exceeded the 10 square mile threshold
needed for adjustment. A summary of one-hour rainfall depths can be
found below in Table 3-1.

Complete rainfall distributions are provided in [*APPENDIX B - Hydrologic Analysis*](appendix-b).

###### Table 3-1 : 1-hr Rainfall Depths

| Return Period | 1 Hour Rainfall Depth (in) |
|---------------|----------------------------|
| 2-yr          | 1.04                       |
| 5-yr          | 1.45                       |
| 10-yr         | 1.75                       |
| 25-yr         | 2.05                       |
| 50-yr         | 2.40                       |
| 100-yr        | 2.65                       |

## 3.3 Subwatershed Characteristics

Subwatershed characteristics are summarized in the CUHP input table and
subwatershed figure located in [*APPENDIX B - Hydrologic Analysis*](appendix-b).

#### 3.3.1 Subwatershed Delineation

As discussed in Section 3.1, subwatersheds delineation focused on
identifying flow change locations for Leyden Creek. All basins conform
to a maximum of 3,000 acres in size, with smaller subwatersheds located
in more urban areas. The previous 2003 Boyle study included only 21
subwatersheds ranging in size from 44 acres to 3187 acres. This study
includes 44 subwatersheds averaging 171 acres, and ranging between 16
acres to 1413 acres in size. Downstream of Leyden Lake the average
watershed size is only 69.1 acres. The Church Ditch, Farmers’ High line
Canal and Croke Canal were assumed full for the subwatershed
delineation.

#### 3.3.2 Watershed Imperviousness

Imperviousness for each subwatershed was estimated from a GIS based
interpretation of land use and zoning information described in
[Section 2.2 Land Use](/study-area-description/#22-land-use).

#### 3.3.3 Length, Centroid Distance, Slope

CUHP parameters such as subwatershed length, distance to centroid, and
slopes were derived for each subwatershed using topographic data. Slopes
were computed using the length-weighted, corrected average slope from
Equation RO-9 and Figure RO-10 (USDCM). Subwatersheds downstream of
Leyden Lake average a slope of 2.59% while the average for the entire
watershed is a 2.94% slope.

#### 3.3.4 Depression Losses

Depression storage loss was determined based on Table RO-6 from the
USDCM. Aerial imagery was used to examine each subwatershed. Generally
the depression loss value of 0.35 for pervious areas and 0.1 for
impervious areas was carried forward from previous studies. A pervious
depression storage value of 0.4 was used upstream of Leyden Lake in open
space areas.

#### 3.3.5 Infiltration

Soil data was obtained from Natural Resources Conservation Service
(NRCS). The majority of the basin contains Type C soil consistent with
the 2003 Boyle Hydrology Report. Table RO-7 provided Horton’s
infiltration parameters for Type C/D soil which consists of an initial
infiltration rate of 3.0 inches per hour, a final infiltration rate of
0.5 inches per hour and a decay coefficient of 0.0018. There are several
basins upstream of Leyden Lake that were found to contain Type B soil
and parameters for these basins were adjusted accordingly.

## 3.4 Hydrograph Routing

#### 3.4.1 Manning’s n Coefficient

Each hydraulic Manning’s n roughness coefficient value was selected
using Table MD-1 from USDCM. Following UDFCD guidance the values were
then increased by 25% to better represent modeling conditions.

#### 3.4.2 Conveyance Elements

Each conveyance element was determined by examining the contour data and
comparing to previous studies. Storm sewers sizes and alignments were
modeled based on the City of Arvada GIS files. A SWMM routing map and a
SWMM schematic figure are included in [*APPENDIX B - Hydrologic Analysis*](appendix-b).

#### 3.4.3 Detention Facilities

Detention facilities within the watershed were evaluated and those
meeting size and public ownership requirements were included in the SWMM
routing. The inclusion of detention areas was reviewed with project
sponsors. Detention was modeled at Leyden Lake, the Leyden Ranch sump,
Lamplighter Park, and at Ralston Valley High School. Storage volumes for
each facility were determined from the project topographic mapping.
Release rates were developed from orifice and weir calculations
reflecting the existing outlet structure configurations. Storage and
discharge curves for the four detention facilities are provided in
[*APPENDIX B - Hydrologic Analysis*](appendix-b).

Leyden Lake was examined in further detail due to past discrepancies in
the spillway elevation. The City of Arvada conducted a survey to
determine the elevation of the spillway in relation to the Leyden Creek
Dam As-Built drawings and project mapping. A conversion value of +2.2
feet was provided by Arvada to convert from the City of Arvada datum to
the project datum, NAVD 88. As-built elevations from the dam were
adjusted to the project datum by adding 2.9 feet. Datum conversion
information is included in [*APPENDIX B - Hydrologic Analysis*](appendix-b).

## 3.5 Previous Studies

In 1977 Wright-McLaughlin Engineers utilized the Massachusetts Institute
of Technology Catchment program (MITCAT) to develop a model for
Ralston/Leyden Creeks. The results of this MITCAT model were used to
develop the effective FEMA flood insurance study (FIS).

In 2003 Boyle Engineering Corporation updated the hydrology for Ralston
Creek and Leyden Lake. The purpose of the Boyle study was to update the
watershed model from MITCAT to CUHP/UDSWMM. The model reflected
improvements made to Leyden Creek Dam. Boyle examined the 10-, 50-,
100-, and 500-year events. A FHAD downstream of Leyden Lake was also
prepared which utilized the updated flow results.

## 3.6 Hydrograph Calibration

With input from the project sponsors, three basins (106, 115, 303)
required calibration. Due to the topography of the project area, these
basins were underestimating runoff due to excessive length to width
ratios. The peak runoff rate coefficient, Cp, was increased for each
basin to produce runoff comparable to basins with similar impervious
characteristics. Increases in peak flows, especially upstream of Leyden
Lake, can be attributed to the increases in imperviousness within the
watershed and variations in sub-watershed routing.

## 3.7 Results of Analysis

The results of the analysis are presented in [Table 3-2](#table-3-2-previous-studies-reconciliation-100-yr-flows).
As noted above, results compare well with past studies prepared for the UDFCD and
adopted by FEMA. Increased discharges can be correlated with increases
in watershed imperviousness and variations in sub-watershed routing.

It should also be noted that past hydrology for Leyden and Ralston
Creeks performed rainfall adjustments for watershed areas in excess of
10 square miles. These adjustments have not been performed with the
current update since at 11.8 square miles, the watershed is only
moderately above the 10 square mile threshold for rainfall adjustment.
Additionally, peak flows along Leyden Creek were already lower than the
effective flows. If a similar adjustment was made, peak discharges east
of Alkire Street would be reduced further.

The increase in flows from the previous study from below Leyden Lake Dam
to Alkire Street is due to the increase in discharge from Leyden Lake.
The discharge increased from 373 cfs from the 2003 Boyle Hydrology
Report to 550 cfs with the updated information. The updated survey
information combined with updates to land use projections lead to an
increase of flows into and out of Leyden Lake.

The decreased flows in lower reaches are caused by updated land use and
added detention facilities. The update in land use data lead to a lower
impervious value within Reach 3. Ralston Valley High School and
Lamplighter Park detention were included with this study reducing flows
in basins that had higher impervious values.

Peak flow and runoff volume tables are included for both existing and
future conditions for all design points, and all frequencies in
[*APPENDIX B - Hydrologic Analysis*](appendix-b).. Hydrographs and peak flow profiles
are also provided in [*APPENDIX B - Hydrologic Analysis*](appendix-b).

###### Table 3-2 : Previous Studies Reconciliation (100 yr. Flows)

|                                |                   | FIS (1977 MDP)    |               | 2004 Boyle FHAD   |               | 2014 Leyden Creek MDP |                              |                                 |
|--------------------------------|-------------------|-------------------|---------------|-------------------|---------------|-----------------------|------------------------------|---------------------------------|
|                                |                   | **Drainage Area** | **Discharge** | **Drainage Area** | **Discharge** | **Drainage Area**     | **Ex. Conditions Discharge** | **Future Conditions Discharge** |
| **Design Point**               | **SWMM Junction** | **(sq. mi)**      | **(cfs)**     | **(sq. mi)**      | **(cfs)**     | **(sq. mi)**          | **(cfs)**                    | **(cfs)**                       |
| Confluence with Ralston Creek  | RalstonCreek      | --                | --            | 11.89             | 2465          | 11.78                 | 2057                         | 2171                            |
| Simms Street                   | 101               | 11.80             | 2456          | 11.89             | 2456          | 11.72                 | 2043                         | 2157                            |
| W 72nd Avenue                  | 102               | --                | --            | 11.74             | 2456          | 11.57                 | 1973                         | 2083                            |
| W 75th Place                   | 109               | --                | --            | 10.72             | 1519          | 10.58                 | 1330                         | 1416                            |
| Alkire Street                  | 202               | --                | --            | 10.21             | 1035          | 10.33                 | 1175                         | 1249                            |
| Indiana Street/Croke Canal     | 301               | --                | --            | 9.26              | 372           | 9.62                  | 615                          | 665                             |
| Below Leyden Lake              | 351               | 9.00              | 373           | 9.16              | 373           | 9.19                  | 333                          | 550                             |
| Above Leyden Lake              | 401               | 9.00              | 3750          | 9.16              | 4081          | 9.19                  | 4975                         | 5532                            |
| Leyden Crossing Church Ditch   | 403               | --                | --            | --                | --            | 8.69                  | 4855                         | 5380                            |
| Quaker Street                  | 404               | --                | --            | --                | --            | 8.42                  | 4713                         | 5212                            |
| Leyden Crossing 82nd Ave       | 412               | --                | --            | --                | --            | 4.52                  | 2371                         | 2453                            |
| At Foothills Road              | 413               | 4.20              | 3300          | 4.18              | 3225          | 4.02                  | 2068                         | 2136                            |

###### Table 3-3 : Summary of Peak Flows

| Design Point                  | ICON Junction | Drainage Area (sq. mile) | Ex. 2-yr | Ex. 5-yr | Ex. 10-yr | Ex. 25-yr | Ex. 50-yr | Ex. 100-yr | Future 2-yr | Future 5-yr | Future 10-yr | Future 25-yr | Future 50-yr | Future 100-yr |
|:------------------------------|---------------|--------------------------|----------|----------|-----------|-----------|-----------|------------|-------------|-------------|--------------|--------------|--------------|---------------|
| Confluence with Ralston Creek | Ralston Creek | 11.78                    | 229      | 506      | 759       | 1203      | 1636      | 2057       | 229         | 538         | 818          | 1282         | 1733         | 2171          |
| Simms Street                  | 101           | 11.72                    | 221      | 487      | 750       | 1195      | 1624      | 2043       | 221         | 533         | 810          | 1274         | 1721         | 2157          |
| W 72nd Avenue                 | 102           | 11.57                    | 195      | 466      | 723       | 1163      | 1572      | 1973       | 195         | 516         | 781          | 1239         | 1666         | 2083          |
| W 75th Place                  | 109           | 10.58                    | 119      | 306      | 466       | 802       | 1070      | 1330       | 167         | 347         | 520          | 867          | 1147         | 1416          |
| Alkire Street                 | 202           | 10.33                    | 119      | 270      | 425       | 719       | 947       | 1175       | 166         | 312         | 478          | 778          | 1018         | 1249          |
| Indiana Street / Croke Canal  | 301           | 9.62                     | 112      | 200      | 266       | 392       | 508       | 615        | 155         | 236         | 305          | 439          | 555          | 665           |
| Below Leyden Lake             | 351           | 9.19                     | 111      | 174      | 186       | 201       | 212       | 333        | 153         | 178         | 190          | 204          | 215          | 550           |
| Above Leyden Lake             | 401           | 9.19                     | 339      | 1036     | 1759      | 2912      | 3939      | 4975       | 639         | 1418        | 2030         | 3312         | 4404         | 5532          |
| Church Ditch                  | 403           | 8.69                     | 332      | 1008     | 1714      | 2844      | 3844      | 4855       | 637         | 1392        | 1971         | 3218         | 4278         | 5380          |
| Quaker Street                 | 404           | 8.42                     | 314      | 976      | 1663      | 2763      | 3732      | 4713       | 613         | 1332        | 1908         | 3116         | 4141         | 5212          |
| W. 82nd Ave                   | 412           | 4.52                     | 49       | 464      | 815       | 1390      | 1882      | 2371       | 81          | 512         | 866          | 1455         | 1955         | 2453          |
| Foothills Road                | 413           | 4.02                     | 35       | 404      | 703       | 1213      | 1640      | 2068       | 71          | 449         | 749          | 1271         | 1703         | 2136          |

