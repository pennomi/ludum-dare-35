import {BaseAnimationDef} from './base'

export class MinotaurAnimation extends BaseAnimationDef {
  getImageUrl() { return "assets/images/minotaur.png"; }
  animations = {
    walk: {
      duration: 253,
      frames: [
        [0,0,1021,714,54,78,25,74],
        [0,1,205,658,61,84,25,75],
        [0,2,695,0,74,80,21,70],
        [0,3,665,243,74,80,23,73],
        [0,4,284,1046,65,84,25,71],
        [0,5,1075,710,66,77,27,64],
        [0,6,1448,1230,78,64,45,56],
        [0,7,1619,664,72,70,45,66],
        [1,0,1397,846,48,76,25,73],
        [1,1,839,1080,59,81,24,74],
        [1,2,1159,394,73,76,21,68],
        [1,3,1376,151,69,75,17,69],
        [1,4,802,882,58,79,19,66],
        [1,5,1600,296,65,73,26,59],
        [1,6,1813,471,77,58,44,54],
        [1,7,1740,975,67,68,46,64],
        [2,0,1094,554,53,78,33,75],
        [2,1,643,411,51,81,23,77],
        [2,2,1046,870,72,77,20,71],
        [2,3,821,482,72,79,14,71],
        [2,4,1191,786,54,77,13,69],
        [2,5,1397,304,55,75,17,61],
        [2,6,1873,872,75,62,41,57],
        [2,7,1695,1044,72,68,50,67],
        [3,0,1129,0,71,78,41,74],
        [3,1,447,426,55,83,27,77],
        [3,2,554,673,71,82,25,73],
        [3,3,397,86,74,85,17,75],
        [3,4,1044,1078,76,77,26,73],
        [3,5,1229,470,69,76,25,64],
        [3,6,1905,470,74,68,34,59],
        [3,7,1445,845,75,75,48,67],
        [4,0,1230,156,72,76,42,71],
        [4,1,760,563,55,80,28,74],
        [4,2,694,403,66,80,28,70],
        [4,3,409,0,73,85,22,76],
        [4,4,1014,398,74,78,25,75],
        [4,5,916,879,67,78,23,66],
        [4,6,1765,1126,70,67,28,56],
        [4,7,1555,223,74,73,44,64],
        [5,0,1672,516,64,72,40,66],
        [5,1,1495,604,47,75,26,69],
        [5,2,1240,622,67,76,29,68],
        [5,3,710,162,72,80,22,74],
        [5,4,1276,546,65,76,19,73],
        [5,5,961,718,60,78,17,64],
        [5,6,1770,1193,69,66,30,54],
        [5,7,1948,873,74,65,44,59],
        [6,0,1433,454,55,75,35,69],
        [6,1,952,0,47,80,26,72],
        [6,2,1106,947,72,77,28,71],
        [6,3,769,1082,70,81,18,77],
        [6,4,766,483,55,80,13,75],
        [6,5,845,160,57,80,14,67],
        [6,6,1873,934,74,65,34,57],
        [6,7,1873,806,75,66,46,61],
        [7,0,1134,787,57,77,27,73],
        [7,1,58,1063,55,85,25,75],
        [7,2,580,508,74,82,24,73],
        [7,3,475,677,79,82,26,77],
        [7,4,310,872,66,83,26,74],
        [7,5,834,1163,60,81,20,67],
        [7,6,1731,907,74,68,40,59],
        [7,7,1806,664,75,69,47,65]
      ]
    },
    attack: {
      duration: 400,
      frames: [
        [0,0,500,1036,48,83,25,76],
        [0,1,451,171,53,83,24,75],
        [0,2,1620,1145,74,75,26,69],
        [0,3,955,160,69,79,17,75],
        [0,4,402,1204,49,83,15,75],
        [0,5,558,249,54,81,17,70],
        [0,6,1800,733,75,68,38,62],
        [0,7,1471,682,72,75,44,70],
        [1,0,760,403,60,80,12,73],
        [1,1,1361,935,76,76,12,68],
        [1,2,1823,359,83,65,19,59],
        [1,3,1198,706,53,77,20,66],
        [1,4,643,0,52,81,33,71],
        [1,5,933,640,80,78,54,72],
        [1,6,1385,1087,90,67,53,66],
        [1,7,802,240,59,80,22,75],
        [2,0,71,401,68,94,8,87],
        [2,1,1245,783,78,76,14,68],
        [2,2,1430,770,79,75,16,63],
        [2,3,702,836,48,82,20,69],
        [2,4,211,742,61,84,42,74],
        [2,5,965,1080,79,77,56,75],
        [2,6,139,398,78,88,45,87],
        [2,7,0,507,47,97,12,92],
        [3,0,192,573,63,85,35,78],
        [3,1,0,1148,57,85,19,78],
        [3,2,1602,1222,80,72,18,67],
        [3,3,958,558,80,78,16,72],
        [3,4,593,755,62,82,14,75],
        [3,5,654,492,51,81,21,72],
        [3,6,148,1226,81,68,46,66],
        [3,7,951,1158,85,77,56,72],
        [4,0,316,621,81,83,64,76],
        [4,1,264,280,79,86,55,79],
        [4,2,312,955,61,83,19,78],
        [4,3,1489,374,75,73,15,72],
        [4,4,789,643,75,79,11,72],
        [4,5,730,80,70,80,6,66],
        [4,6,1526,74,57,74,24,59],
        [4,7,1036,476,71,78,47,68],
        [5,0,272,706,82,83,60,76],
        [5,1,267,180,74,86,52,79],
        [5,2,894,1161,57,81,19,76],
        [5,3,1779,72,71,71,16,69],
        [5,4,961,478,75,78,11,71],
        [5,5,181,878,71,84,7,69],
        [5,6,1368,694,53,76,19,63],
        [5,7,1190,314,73,76,42,67],
        [6,0,279,789,78,83,55,76],
        [6,1,342,86,55,86,32,78],
        [6,2,1068,0,61,79,24,74],
        [6,3,1525,298,75,73,18,71],
        [6,4,700,1001,74,81,11,74],
        [6,5,118,971,50,85,9,71],
        [6,6,800,80,61,80,22,64],
        [6,7,1524,529,78,74,46,68],
        [7,0,393,260,57,83,34,76],
        [7,1,337,450,49,84,23,76],
        [7,2,1239,78,72,76,26,70],
        [7,3,1120,1077,71,77,17,75],
        [7,4,503,254,55,81,13,76],
        [7,5,255,538,51,84,14,71],
        [7,6,1774,145,74,71,35,63],
        [7,7,1437,922,77,75,47,70]
      ]
    },
    die: {
      duration: 800,
      frames: [
        [0,0,595,1115,48,83,25,76],
        [0,1,419,787,53,83,24,75],
        [0,2,1263,307,74,75,26,69],
        [0,3,864,642,69,79,17,75],
        [0,4,478,866,49,83,15,75],
        [0,5,589,416,54,81,17,70],
        [0,6,1798,801,75,68,38,62],
        [0,7,1593,982,72,75,44,70],
        [1,0,1421,694,50,76,24,67],
        [1,1,1488,454,51,75,26,67],
        [1,2,1757,0,72,72,29,66],
        [1,3,1732,438,71,71,23,67],
        [1,4,753,723,44,80,13,73],
        [1,5,596,1198,48,83,14,73],
        [1,6,1543,677,76,73,35,66],
        [1,7,1900,0,81,70,41,64],
        [2,0,1854,287,54,67,25,54],
        [2,1,1748,709,52,66,33,54],
        [2,2,1752,363,71,71,35,60],
        [2,3,1661,907,70,69,28,63],
        [2,4,1663,146,46,73,17,65],
        [2,5,866,721,48,79,10,66],
        [2,6,1835,1126,69,66,29,59],
        [2,7,1285,1231,81,63,38,51],
        [3,0,1931,70,50,62,22,49],
        [3,1,1747,775,51,64,34,53],
        [3,2,1908,272,71,70,35,58],
        [3,3,1807,935,66,67,26,61],
        [3,4,1702,366,50,72,23,60],
        [3,5,1259,1154,49,77,11,62],
        [3,6,1971,1126,70,64,30,56],
        [3,7,1191,1095,76,59,37,47],
        [4,0,1765,578,47,64,21,49],
        [4,1,1341,1091,44,63,29,52],
        [4,2,1805,869,68,66,33,54],
        [4,3,1904,1126,67,65,27,59],
        [4,4,1734,291,50,72,23,58],
        [4,5,1931,132,48,70,11,56],
        [4,6,1818,1064,70,58,32,50],
        [4,7,1947,938,74,55,35,43],
        [5,0,1767,1064,51,60,24,42],
        [5,1,1695,725,52,62,32,49],
        [5,2,1971,1190,67,64,38,51],
        [5,3,1979,411,63,64,26,55],
        [5,4,1848,143,58,71,27,53],
        [5,5,1979,475,59,67,16,47],
        [5,6,213,826,66,52,26,38],
        [5,7,818,1244,67,49,33,35],
        [6,0,1807,1002,66,55,31,32],
        [6,1,1908,342,71,60,43,43],
        [6,2,1906,402,73,68,43,50],
        [6,3,1946,1060,72,66,33,50],
        [6,4,1873,999,73,65,36,44],
        [6,5,967,1235,77,59,26,37],
        [6,6,139,840,74,38,30,24],
        [6,7,897,1039,71,41,37,24],
        [7,0,968,1035,79,43,44,16],
        [7,1,1823,424,82,47,52,28],
        [7,2,1119,1232,85,62,54,44],
        [7,3,1366,1230,82,64,40,48],
        [7,4,1106,1024,85,53,35,36],
        [7,5,644,1251,88,43,30,23],
        [7,6,732,1250,86,44,32,23],
        [7,7,885,1244,82,48,41,22]
      ]
    }
  };
}
