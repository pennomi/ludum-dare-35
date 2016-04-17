import {BaseAnimationDef} from './base'

export class GoblinAnimation extends BaseAnimationDef {
  getImageUrl() { return "assets/images/goblin.png"; }
  animations = {
    walk: {
      duration: 50,
      frames: [
        [0,0,405,224,43,29,21,26],
        [0,1,166,631,34,31,13,29],
        [0,2,303,107,24,34,10,30],
        [0,3,360,630,32,31,10,28],
        [0,4,271,423,41,29,18,26],
        [0,5,511,406,34,32,16,23],
        [0,6,458,632,24,32,9,24],
        [0,7,600,327,35,27,21,23],
        [1,0,408,193,43,31,25,28],
        [1,1,475,438,35,34,14,31],
        [1,2,538,325,27,36,12,32],
        [1,3,150,557,36,36,8,31],
        [1,4,327,109,45,31,14,28],
        [1,5,237,633,37,30,18,26],
        [1,6,571,525,28,31,12,25],
        [1,7,565,336,34,27,23,26],
        [2,0,528,290,31,35,19,34],
        [2,1,118,386,32,44,14,41],
        [2,2,0,514,35,47,13,44],
        [2,3,472,148,36,45,12,41],
        [2,4,131,139,40,40,11,34],
        [2,5,596,69,39,32,16,30],
        [2,6,159,531,38,26,19,29],
        [2,7,541,508,30,29,15,30],
        [3,0,95,398,23,47,10,46],
        [3,1,32,204,28,50,13,47],
        [3,2,63,43,33,48,13,46],
        [3,3,93,252,33,45,11,43],
        [3,4,50,560,28,45,9,40],
        [3,5,497,288,31,42,11,38],
        [3,6,90,214,37,38,17,40],
        [3,7,348,489,28,40,14,43],
        [4,0,34,304,27,50,9,49],
        [4,1,61,301,33,48,11,46],
        [4,2,209,141,37,43,13,43],
        [4,3,141,676,29,41,10,40],
        [4,4,471,288,26,44,9,40],
        [4,5,150,340,31,45,11,42],
        [4,6,95,136,36,46,15,46],
        [4,7,60,203,30,49,14,50],
        [5,0,36,404,26,50,8,48],
        [5,1,118,340,32,46,10,45],
        [5,2,198,258,34,41,12,42],
        [5,3,376,489,28,40,9,40],
        [5,4,473,332,23,45,7,41],
        [5,5,274,253,28,46,10,43],
        [5,6,520,0,37,46,16,47],
        [5,7,61,252,32,49,16,49],
        [6,0,247,332,24,48,7,45],
        [6,1,61,514,29,43,10,42],
        [6,2,80,594,31,41,12,41],
        [6,3,358,529,28,41,9,40],
        [6,4,496,332,21,45,6,41],
        [6,5,35,514,26,46,9,42],
        [6,6,0,466,35,48,16,45],
        [6,7,62,349,31,49,16,46],
        [7,0,166,594,34,37,22,33],
        [7,1,135,593,31,41,14,39],
        [7,2,90,515,31,42,12,38],
        [7,3,371,187,37,37,6,31],
        [7,4,596,35,39,34,10,30],
        [7,5,599,354,34,30,15,27],
        [7,6,513,632,30,29,13,26],
        [7,7,599,456,33,32,23,28]
      ]
    },
    attack: {
      duration: 300,
      frames: [
        [0,0,338,186,33,37,13,34],
        [0,1,271,329,33,40,14,38],
        [0,2,52,649,30,43,11,36],
        [0,3,441,440,34,36,9,30],
        [0,4,596,132,39,31,18,27],
        [0,5,565,309,35,27,17,24],
        [0,6,545,363,26,28,11,24],
        [0,7,228,693,28,33,16,28],
        [1,0,82,635,30,41,15,38],
        [1,1,52,605,28,44,13,41],
        [1,2,163,297,34,43,11,38],
        [1,3,114,557,36,36,7,30],
        [1,4,600,297,35,30,12,27],
        [1,5,599,603,32,26,14,23],
        [1,6,476,664,31,28,15,24],
        [1,7,569,394,29,35,21,31],
        [2,0,118,430,45,29,34,27],
        [2,1,321,489,27,40,16,37],
        [2,2,263,489,29,40,11,37],
        [2,3,491,46,45,31,7,28],
        [2,4,97,40,49,28,9,25],
        [2,5,433,505,31,29,9,21],
        [2,6,571,496,28,29,12,20],
        [2,7,271,398,42,25,32,21]
      ]
    },
    die: {
      duration: 60,
      frames: [
        [0,0,281,46,42,33,21,29],
        [0,1,333,348,40,30,16,27],
        [0,2,411,568,28,32,11,27],
        [0,3,247,380,24,33,8,27],
        [0,4,410,115,41,33,18,29],
        [0,5,405,288,37,33,20,28],
        [0,6,299,529,28,36,11,28],
        [0,7,442,288,29,33,14,28],
        [1,0,181,377,37,31,17,27],
        [1,1,405,352,40,28,15,25],
        [1,2,570,656,29,27,11,25],
        [1,3,535,79,22,31,11,26],
        [1,4,62,444,33,31,16,27],
        [1,5,197,531,35,33,20,28],
        [1,6,374,79,30,37,13,28],
        [1,7,430,600,27,35,10,28],
        [2,0,557,74,39,30,18,29],
        [2,1,233,246,41,26,15,27],
        [2,2,507,663,29,29,11,26],
        [2,3,439,568,24,32,12,27],
        [2,4,476,472,37,32,17,29],
        [2,5,596,0,39,35,21,30],
        [2,6,342,378,30,38,13,31],
        [2,7,541,472,30,36,11,30],
        [3,0,233,217,41,29,19,31],
        [3,1,445,78,42,26,16,29],
        [3,2,199,693,29,33,11,30],
        [3,3,405,412,34,36,13,31],
        [3,4,596,101,39,31,17,31],
        [3,5,131,179,40,35,21,33],
        [3,6,259,594,31,39,13,33],
        [3,7,366,253,36,37,16,33],
        [4,0,232,272,42,27,22,25],
        [4,1,270,299,42,30,17,27],
        [4,2,510,507,31,30,11,25],
        [4,3,194,497,36,34,18,25],
        [4,4,557,104,39,30,15,25],
        [4,5,473,377,40,29,22,24],
        [4,6,230,498,33,33,17,24],
        [4,7,200,633,37,29,15,24],
        [5,0,180,408,38,26,22,20],
        [5,1,596,163,39,28,14,19],
        [5,2,599,519,33,26,12,18],
        [5,3,564,249,36,30,18,19],
        [5,4,121,531,38,26,16,18],
        [5,5,557,164,39,27,24,18],
        [5,6,599,576,32,27,19,16],
        [5,7,489,228,35,25,17,18]
      ]
    }
  };
}
