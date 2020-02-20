import draw2d from '../../packages'


/**
 * @class

 *
 * @example
 *
 *    let icon =  new draw2d.shape.icon.Aumade();
 *
 *    canvas.add(icon,50,10);
 *
 * @inheritable
 * @author Andreas Herz
 * @extends draw2d.shape.icon.Icon
 */
draw2d.shape.icon.Aumade = draw2d.shape.icon.Icon.extend(
  /** @lends draw2d.shape.icon.Aumade.prototype */
  {
  
  NAME: "draw2d.shape.icon.Aumade",

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
    return this.canvas.paper.path("M14.513,24.52c-0.131-0.217-0.14-0.481-0.022-0.711l1.987-3.844l0,0c0.186-0.357,0.625-0.497,0.981-0.312c0.357,0.188,0.498,0.625,0.312,0.982l-1.801,3.48l2.228,3.699h12.269l-14.8-25.631L6.433,18.178c0.434,0.242,0.909,0.479,1.391,0.654c0.571,0.211,1.148,0.342,1.658,0.342c0.276,0,0.579-0.078,0.916-0.238c0.337-0.158,0.7-0.396,1.073-0.688c0.749-0.582,1.527-1.354,2.334-2.021c0.539-0.442,1.091-0.844,1.706-1.099c0.352-0.145,0.729-0.239,1.128-0.239c0.622,0,1.174,0.214,1.622,0.5c0.449,0.287,0.813,0.646,1.11,0.995c0.59,0.697,0.902,1.359,0.924,1.394l0,0c0.18,0.361,0.021,0.801-0.341,0.977c-0.356,0.176-0.798,0.021-0.978-0.34c0-0.002-0.002-0.004-0.004-0.007c-0.002-0.011-0.008-0.021-0.018-0.034c-0.018-0.033-0.043-0.082-0.078-0.146c-0.07-0.125-0.179-0.305-0.312-0.496c-0.271-0.391-0.668-0.845-1.092-1.104c-0.281-0.178-0.561-0.272-0.844-0.272c-0.216,0-0.479,0.069-0.788,0.229c-0.309,0.153-0.653,0.396-1.016,0.688c-0.727,0.584-1.511,1.362-2.351,2.033c-0.562,0.445-1.15,0.853-1.809,1.103c-0.375,0.143-0.776,0.229-1.195,0.229c-0.749,0-1.48-0.181-2.164-0.433c-0.58-0.219-1.125-0.482-1.613-0.764L0.86,27.816h15.63L14.513,24.52zM18.214,22.242c0.222-0.557,0.537-1.217,0.963-1.848c0.427-0.627,0.957-1.232,1.646-1.646c0.379-0.229,0.812-0.391,1.282-0.438l-0.604-0.934l0,0c-0.22-0.339-0.123-0.789,0.215-1.009c0.341-0.219,0.789-0.123,1.013,0.216l1.545,2.391c0.184,0.274,0.147,0.646-0.075,0.893c-0.228,0.247-0.591,0.305-0.886,0.145c-0.354-0.191-0.646-0.258-0.901-0.258c-0.291,0-0.562,0.084-0.845,0.25c-0.277,0.164-0.562,0.414-0.813,0.719c-0.519,0.607-0.937,1.422-1.185,2.055c-0.111,0.285-0.387,0.466-0.678,0.466c-0.092,0-0.183-0.021-0.271-0.056C18.249,23.039,18.064,22.615,18.214,22.242z")
  }
})

