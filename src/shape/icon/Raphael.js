import draw2d from '../../packages'


/**
 * @class

 *
 * @example
 *
 *    let icon =  new draw2d.shape.icon.Raphael();
 *
 *    canvas.add(icon,50,10);
 *
 * @inheritable
 * @author Andreas Herz
 * @extends draw2d.shape.icon.Icon
 */
draw2d.shape.icon.Raphael = draw2d.shape.icon.Icon.extend(
  /** @lends draw2d.shape.icon.Raphael.prototype */
  {

  NAME: "draw2d.shape.icon.Raphael",

  /**
   *
   * Creates a new icon element which are not assigned to any canvas.
   * 
   * @param {Object} attr the configuration of the shape
   */
  init: function (attr, setter, getter) {
    this._super(extend({width: 50, height: 50}, attr), setter, getter)
  },

  /**
   * @private
   * @returns
   */
  createSet: function () {
    return this.canvas.paper.path("M27.777,18.941c0.584-0.881,0.896-1.914,0.896-2.998c0-1.457-0.567-2.826-1.598-3.854l-6.91-6.911l-0.003,0.002c-0.985-0.988-2.35-1.6-3.851-1.6c-1.502,0-2.864,0.612-3.85,1.6H12.46l-6.911,6.911c-1.031,1.029-1.598,2.398-1.598,3.854c0,1.457,0.567,2.826,1.598,3.854l6.231,6.229c0.25,0.281,0.512,0.544,0.789,0.785c1.016,0.961,2.338,1.49,3.743,1.49c1.456,0,2.825-0.565,3.854-1.598l6.723-6.725c0.021-0.019,0.034-0.032,0.051-0.051l0.14-0.138c0.26-0.26,0.487-0.54,0.688-0.838c0.004-0.008,0.01-0.015,0.014-0.021L27.777,18.941zM26.658,15.946c0,0.678-0.197,1.326-0.561,1.879c-0.222,0.298-0.447,0.559-0.684,0.784L25.4,18.625c-1.105,1.052-2.354,1.35-3.414,1.35c-0.584,0-1.109-0.09-1.523-0.195c-2.422-0.608-5.056-2.692-6.261-5.732c0.649,0.274,1.362,0.426,2.11,0.426c2.811,0,5.129-2.141,5.415-4.877l3.924,3.925C26.301,14.167,26.658,15.029,26.658,15.946zM16.312,5.6c1.89,0,3.426,1.538,3.426,3.427c0,1.89-1.536,3.427-3.426,3.427c-1.889,0-3.426-1.537-3.426-3.427C12.886,7.138,14.423,5.6,16.312,5.6zM6.974,18.375c-0.649-0.648-1.007-1.512-1.007-2.429c0-0.917,0.357-1.78,1.007-2.428l2.655-2.656c-0.693,2.359-0.991,4.842-0.831,7.221c0.057,0.854,0.175,1.677,0.345,2.46L6.974,18.375zM11.514,11.592c0.583,4.562,4.195,9.066,8.455,10.143c0.693,0.179,1.375,0.265,2.033,0.265c0.01,0,0.02,0,0.027,0l-3.289,3.289c-0.648,0.646-1.512,1.006-2.428,1.006c-0.638,0-1.248-0.177-1.779-0.5l0.001-0.002c-0.209-0.142-0.408-0.295-0.603-0.461c-0.015-0.019-0.031-0.026-0.046-0.043l-0.665-0.664c-1.367-1.567-2.227-3.903-2.412-6.671C10.669,15.856,10.921,13.673,11.514,11.592")
  }
})

