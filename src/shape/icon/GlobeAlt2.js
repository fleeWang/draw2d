import draw2d from '../../packages'


/**
 * @class

 *
 * @example
 *
 *    let icon =  new draw2d.shape.icon.GlobeAlt2();
 *
 *    canvas.add(icon,50,10);
 *
 * @inheritable
 * @author Andreas Herz
 * @extends draw2d.shape.icon.Icon
 */
draw2d.shape.icon.GlobeAlt2 = draw2d.shape.icon.Icon.extend(
  /** @lends draw2d.shape.icon.GlobeAlt2.prototype */
  {

  NAME: "draw2d.shape.icon.GlobeAlt2",

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
    return this.canvas.paper.path("M16,1.466C7.973,1.466,1.466,7.973,1.466,16c0,8.027,6.507,14.534,14.534,14.534c8.027,0,14.534-6.507,14.534-14.534C30.534,7.973,24.027,1.466,16,1.466zM8.251,7.48c0.122,0.055,0.255,0.104,0.28,0.137C8.57,7.668,8.621,7.823,8.557,7.861C8.492,7.9,8.39,7.887,8.376,7.771c-0.013-0.115-0.026-0.128-0.18-0.18c-0.022-0.007-0.035-0.01-0.051-0.015C8.18,7.544,8.216,7.512,8.251,7.48zM7.733,7.974c0.031,0.087,0.113,0.125,0,0.17C7.673,8.168,7.611,8.172,7.559,8.165C7.617,8.102,7.672,8.035,7.733,7.974zM16,27.533C9.639,27.533,4.466,22.36,4.466,16c0-0.085,0.011-0.168,0.013-0.254c0.004-0.003,0.008-0.006,0.012-0.009c0.129-0.102,0.283-0.359,0.334-0.45c0.052-0.089,0.181-0.154,0.116-0.256c-0.059-0.096-0.292-0.23-0.407-0.261c0.01-0.099,0.032-0.195,0.045-0.294c0.063,0.077,0.137,0.17,0.208,0.194c0.115,0.038,0.501,0.052,0.566,0.052c0.063,0,0.334,0.014,0.386-0.064c0.051-0.077,0.09-0.077,0.154-0.077c0.064,0,0.18,0.231,0.271,0.257c0.089,0.026,0.257,0.013,0.244,0.181c-0.012,0.166,0.077,0.309,0.167,0.321c0.09,0.013,0.296-0.194,0.296-0.194s0,0.322-0.012,0.438C6.846,15.698,7,16.124,7,16.124s0.193,0.397,0.244,0.488c0.052,0.09,0.27,0.36,0.27,0.476c0,0.117,0.026,0.297,0.104,0.297s0.155-0.206,0.244-0.335c0.091-0.128,0.117-0.31,0.155-0.438c0.039-0.129,0.039-0.36,0.039-0.45c0-0.091,0.076-0.168,0.257-0.245c0.181-0.077,0.309-0.296,0.463-0.412c0.155-0.116,0.142-0.309,0.452-0.309c0.308,0,0.282,0,0.36-0.078c0.077-0.077,0.154-0.128,0.192,0.013c0.039,0.142,0.257,0.347,0.296,0.399c0.039,0.052,0.116,0.193,0.104,0.348c-0.013,0.153,0.012,0.334,0.077,0.334c0.064,0,0.193-0.219,0.193-0.219s0.283-0.192,0.27,0.014c-0.014,0.205,0.025,0.425,0.025,0.552c0,0.13,0.232,0.438,0.232,0.362c0-0.079,0.103-0.296,0.103-0.413c0-0.114,0.064-0.063,0.231,0.051c0.167,0.116,0.283,0.349,0.283,0.349s0.168,0.154,0.193,0.219c0.026,0.064,0.206-0.025,0.244-0.104c0.039-0.076,0.065-0.115,0.167-0.141c0.104-0.026,0.231-0.026,0.271-0.168c0.039-0.142,0.154-0.308,0-0.502c-0.154-0.193-0.232-0.321-0.347-0.412c-0.117-0.09-0.206-0.322-0.206-0.322s0.244-0.218,0.321-0.296c0.079-0.077,0.193-0.025,0.207,0.064c0.013,0.091-0.115,0.168-0.141,0.361c-0.026,0.192,0.154,0.257,0.206,0.192c0.051-0.065,0.18-0.219,0.18-0.257c0-0.039-0.089-0.026-0.102-0.167c-0.013-0.142,0.166-0.245,0.23-0.207c0.066,0.039,0.477-0.051,0.67-0.154s0.308-0.322,0.425-0.412c0.116-0.089,0.515-0.386,0.489-0.527c-0.026-0.142,0.012-0.334-0.09-0.515c-0.103-0.18-0.232-0.295-0.283-0.373c-0.051-0.077,0.219-0.09,0.347-0.206c0.129-0.116,0-0.219-0.064-0.206c-0.064,0.013-0.232,0.052-0.296,0.039c-0.064-0.013-0.103-0.077-0.206-0.155c-0.102-0.077,0.026-0.192,0.091-0.179c0.064,0.013,0.23-0.129,0.308-0.193c0.077-0.064,0.193-0.115,0.154-0.051c-0.038,0.064-0.128,0.296-0.026,0.309c0.104,0.013,0.348-0.193,0.388-0.18c0.038,0.013,0.102,0.18,0.064,0.257c-0.039,0.077-0.039,0.206,0.013,0.193c0.051-0.013,0.154-0.129,0.18-0.09c0.027,0.039,0.154,0.116,0.09,0.257c-0.063,0.142-0.193,0.193-0.039,0.284c0.154,0.089,0.206,0.012,0.322-0.052c0.115-0.064,0.193-0.347,0.128-0.438c-0.064-0.09-0.218-0.27-0.218-0.334c0-0.064,0.257-0.064,0.257-0.167s0.09-0.18,0.18-0.219c0.091-0.039,0.206-0.206,0.244-0.154c0.039,0.052,0.271,0.116,0.334,0.039c0.064-0.077,0.4-0.36,0.605-0.515c0.206-0.154,0.283-0.334,0.336-0.515c0.051-0.18,0.128-0.296,0.102-0.437v0c0.077,0.18,0.09,0.309,0.077,0.45c-0.013,0.142,0,0.438,0.026,0.476c0.025,0.039,0.129,0.128,0.192,0.103c0.064-0.025-0.025-0.283-0.025-0.334c0-0.052,0.09-0.129,0.142-0.142c0.052-0.013,0-0.231-0.065-0.322c-0.063-0.09-0.154-0.142-0.102-0.154c0.051-0.013,0.115-0.116,0.077-0.142c-0.039-0.025-0.014-0.116-0.103-0.09c-0.065,0.019-0.241-0.015-0.235,0.095c-0.037-0.11-0.116-0.183-0.216-0.172c-0.116,0.013-0.181,0.077-0.296,0.077s-0.025-0.18-0.077-0.18c-0.051,0-0.168,0.167-0.231,0.077c-0.064-0.09,0.18-0.206,0.373-0.27c0.192-0.064,0.514-0.438,0.644-0.451c0.128-0.013,0.45,0.026,0.733,0.013c0.283-0.013,0.373-0.129,0.463-0.064s0.283,0.142,0.399,0.129c0.116-0.014,0.064,0,0.244-0.129c0.18-0.129,0.348-0.193,0.438-0.296c0.09-0.103,0.335-0.18,0.348-0.077c0.014,0.103-0.026,0.206,0.077,0.206s0.258-0.103,0.386-0.154c0.129-0.051,0.231-0.116,0.231-0.116s-0.527,0.36-0.655,0.438c-0.129,0.077-0.438,0.129-0.567,0.283c-0.128,0.155-0.205,0.206-0.192,0.374c0.014,0.167,0.231,0.386,0.128,0.54c-0.103,0.154-0.141,0.373-0.141,0.373s0.154-0.219,0.373-0.36s0.348-0.334,0.425-0.412s0.309-0.091,0.309-0.181s0.064-0.206,0.104-0.309c0.038-0.103-0.077-0.078,0-0.206c0.076-0.129,0.064-0.232,0.45-0.232s0.257,0.026,0.566,0.013c0.309-0.013,0.424-0.167,0.72-0.245c0.296-0.077,0.527-0.128,0.618-0.089c0.09,0.038,0.232,0.012,0.141-0.078c-0.089-0.09-0.295-0.219-0.193-0.245c0.104-0.026,0.207-0.039,0.246-0.142c0.039-0.103-0.142-0.283-0.039-0.386c0.104-0.103-0.077-0.231-0.207-0.257c-0.128-0.025-0.63,0.026-0.731-0.025c-0.104-0.052-0.271-0.116-0.322-0.078c-0.052,0.039-0.168,0.245-0.168,0.245s-0.09,0.025-0.168-0.09c-0.076-0.116-0.5-0.103-0.629-0.103s-0.271,0.025-0.413,0.039c-0.141,0.013-0.219,0.052-0.322-0.039c-0.102-0.09-0.243-0.129-0.296-0.167c-0.051-0.039-0.334-0.039-0.553-0.012c-0.218,0.025-0.438,0.025-0.438,0.025s-0.104-0.039-0.257-0.129c-0.154-0.09-0.309-0.154-0.361-0.154c-0.051,0-0.449,0.064-0.539,0c-0.091-0.064-0.181-0.103-0.245-0.103s-0.115-0.103-0.038-0.103s0.437-0.103,0.437-0.103s-0.103-0.142-0.231-0.142c-0.128,0-0.359-0.064-0.424-0.064s-0.014,0.064-0.142,0.039c-0.13-0.026-0.258-0.078-0.335-0.026c-0.076,0.051-0.258,0.128-0.064,0.18c0.193,0.052,0.373,0,0.425,0.078c0.052,0.077,0,0.115,0,0.167s-0.103,0.193-0.167,0.219c-0.064,0.025-0.143-0.039-0.27,0.025c-0.129,0.064-0.451,0.013-0.49,0.052c-0.038,0.039-0.115-0.103-0.18-0.077c-0.064,0.025-0.232,0.193-0.322,0.18c-0.089-0.013-0.206-0.103-0.206-0.206s-0.038-0.232-0.077-0.258c-0.038-0.025-0.322-0.039-0.425-0.025c-0.103,0.013-0.424,0.038-0.477,0.09c-0.052,0.052-0.193,0.09-0.283,0.09s-0.167-0.09-0.36-0.116c-0.192-0.026-0.617-0.039-0.669-0.026s-0.218-0.025-0.155-0.077c0.065-0.051,0.257-0.219,0.143-0.295c-0.117-0.078-0.375-0.078-0.489-0.09c-0.117-0.013-0.232-0.039-0.413-0.013c-0.181,0.026-0.219,0.116-0.296,0.039c-0.077-0.077,0.193,0.039-0.077-0.077c-0.27-0.116-0.399-0.103-0.477-0.064c-0.077,0.039,0.013,0.025-0.192,0.103c-0.206,0.078-0.322,0.116-0.374,0.129c-0.051,0.012-0.372-0.065-0.411-0.091c-0.038-0.025-0.181,0.013-0.309,0.064S9.895,7.025,9.767,7C9.638,6.973,9.432,6.973,9.303,7.025C9.174,7.076,9.084,7.076,8.956,7.166c-0.13,0.09-0.373,0.142-0.373,0.142S8.522,7.305,8.448,7.301C10.474,5.541,13.111,4.466,16,4.466c6.361,0,11.534,5.173,11.534,11.534S22.36,27.533,16,27.533zM14.888,19.92c0,0,0.207-0.026,0.207-0.117c0-0.089-0.207-0.205-0.282-0.102c-0.078,0.102-0.219,0.205-0.207,0.296C14.625,20.138,14.888,19.92,14.888,19.92zM14.875,17.023c-0.181,0.233-0.167,0.182-0.296,0.128c-0.128-0.05-0.334,0.116-0.296,0.182c0.039,0.064,0.322-0.014,0.386,0.102c0.065,0.116,0.065,0.129,0.193,0.104c0.128-0.026,0.257-0.205,0.219-0.295C15.043,17.151,14.875,17.023,14.875,17.023zM14.837,18.245c-0.051,0-0.412,0.064-0.451,0.079c-0.039,0.013-0.27-0.025-0.27-0.025c-0.09,0.089-0.026,0.179,0.116,0.166s0.438-0.052,0.502-0.052C14.799,18.413,14.888,18.245,14.837,18.245zM14.284,14.668c-0.19,0.03-0.308,0.438-0.155,0.425C14.284,15.081,14.451,14.643,14.284,14.668zM14.734,16.959c-0.052-0.064-0.181-0.271-0.323-0.219c-0.042,0.017-0.153,0.245-0.012,0.245C14.541,16.985,14.786,17.023,14.734,16.959zM14.85,16.805c0.232-0.013,0.167-0.245-0.013-0.257C14.786,16.544,14.618,16.818,14.85,16.805zM17.591,18.928c-0.193-0.039-0.244-0.102-0.45-0.205c-0.207-0.103-0.67-0.103-0.682-0.039c-0.014,0.064,0,0-0.155-0.05c-0.153-0.054-0.271,0-0.309-0.091c-0.038-0.091-0.128-0.117-0.244-0.002c-0.097,0.097-0.142,0.104,0.078,0.143c0.218,0.039,0.283,0.039,0.192,0.141c-0.09,0.104-0.154,0.233-0.077,0.244c0.077,0.015,0.309-0.05,0.334,0c0.026,0.054-0.051,0.064,0.207,0.105c0.258,0.037,0.309,0.128,0.359,0.178c0.051,0.052,0.206,0.22,0.104,0.22c-0.104,0-0.219,0.128-0.142,0.143c0.077,0.013,0.309-0.039,0.321,0c0.014,0.037,0.143,0.283,0.271,0.271c0.129-0.013,0.206-0.244,0.27-0.31c0.065-0.064,0.322-0.104,0.349,0.012c0.026,0.116,0.104,0.233,0.257,0.311c0.154,0.076,0.335,0.154,0.348,0.089c0.013-0.064-0.077-0.309-0.181-0.346c-0.103-0.041-0.282-0.259-0.282-0.348c0-0.091-0.155-0.117-0.232-0.182C17.849,19.147,17.784,18.967,17.591,18.928zM8.042,17.023c-0.084,0.037-0.155,0.476,0,0.527c0.154,0.052,0.244-0.205,0.193-0.271C8.183,17.218,8.158,16.973,8.042,17.023zM15.429,18.117c-0.118-0.05-0.335,0.424-0.181,0.463C15.403,18.62,15.518,18.156,15.429,18.117zM15.687,13.703c0.077,0,0.18-0.051,0.18-0.193c0-0.142,0.18,0,0.27-0.013s0.141-0.103,0.18-0.206c0.005-0.013,0.008-0.021,0.009-0.027c-0.003,0.024-0.001,0.093,0.095,0.117c0.154,0.038,0.205-0.064,0.205-0.103s0.283-0.103,0.336-0.142c0.051-0.038,0.258-0.103,0.27-0.154c0.013-0.051,0-0.348,0.064-0.373c0.064-0.026,0.154-0.026,0.052-0.206c-0.104-0.181-0.104-0.348-0.232-0.271c-0.095,0.057-0.038,0.284-0.115,0.438s-0.142,0.296-0.193,0.296s-0.321,0.103-0.399,0.18c-0.076,0.077-0.45-0.064-0.501,0c-0.052,0.064-0.154,0.141-0.219,0.193c-0.065,0.051-0.245,0.013-0.207,0.167C15.518,13.562,15.609,13.703,15.687,13.703zM17.449,12.056c0.18-0.013,0.348-0.064,0.348-0.064s0.271,0.013,0.232-0.116c-0.04-0.128-0.322-0.141-0.375-0.128c-0.051,0.013-0.142-0.142-0.244-0.116c-0.096,0.023-0.128,0.155-0.128,0.193c0,0.039-0.36,0.115-0.245,0.219C17.153,12.146,17.27,12.069,17.449,12.056zM13.91,19.058c0.104,0.064,0.296-0.219,0.349-0.13c0.051,0.091-0.013,0.13,0.076,0.246c0.091,0.114,0.258,0.102,0.258,0.102s-0.013-0.309-0.155-0.387c-0.142-0.077-0.232-0.166-0.064-0.141c0.167,0.026,0.257-0.039,0.219-0.114c-0.039-0.078-0.283-0.039-0.361-0.026s-0.193-0.052-0.193-0.052c-0.077,0.024-0.063,0.089-0.09,0.219C13.923,18.902,13.807,18.992,13.91,19.058zM20.924,21.618c-0.231-0.052-0.077,0.039,0,0.154c0.077,0.116,0.232,0.176,0.258,0.05C21.193,21.759,21.155,21.67,20.924,21.618zM21.915,24.744c-0.077,0.064,0,0.091-0.219,0.22c-0.22,0.13-0.49,0.271-0.541,0.386c-0.052,0.116,0.051,0.181,0.258,0.192c0.206,0.013,0.154,0.053,0.296-0.103s0.271-0.244,0.438-0.373c0.168-0.128,0.168-0.322,0.168-0.322s-0.181-0.178-0.193-0.141C22.1,24.665,21.992,24.681,21.915,24.744zM18.504,21.618c0.014-0.116-0.219-0.116-0.334-0.207c-0.116-0.089-0.128-0.359-0.193-0.515c-0.064-0.153-0.192-0.257-0.322-0.397c-0.128-0.143-0.192-0.465-0.23-0.438c-0.039,0.025-0.154,0.399-0.064,0.515c0.09,0.116-0.039,0.348-0.103,0.503c-0.065,0.153-0.22-0.026-0.349-0.104c-0.129-0.078-0.308-0.128-0.398-0.219c-0.09-0.091,0.155-0.335,0.091-0.426c-0.065-0.09-0.412-0.013-0.45-0.013c-0.039,0-0.116-0.128-0.194-0.128c-0.077,0-0.064,0.258-0.064,0.258s-0.078-0.091-0.193-0.207c-0.117-0.115,0.012,0.077-0.103,0.193c-0.117,0.117-0.079,0.078-0.129,0.206c-0.051,0.129-0.167,0.077-0.283-0.052c-0.116-0.128-0.179-0.037-0.258,0c-0.077,0.039-0.141,0.259-0.18,0.309c-0.039,0.052-0.309,0.117-0.374,0.182c-0.064,0.062-0.09,0.27-0.09,0.322c0,0.05-0.271,0.023-0.361,0.089c-0.09,0.064-0.23,0.025-0.321,0.025c-0.09,0-0.399,0.244-0.502,0.308c-0.103,0.066-0.103,0.298-0.051,0.362c0.051,0.063,0.154,0.219,0.09,0.244c-0.064,0.026-0.104,0.206,0.051,0.359c0.154,0.155,0.103,0.194,0.115,0.271c0.014,0.077,0.078,0.104,0.181,0.232c0.102,0.128-0.181,0.231-0.219,0.31c-0.039,0.076,0.091,0.192,0.167,0.257c0.077,0.063,0.271,0.026,0.386-0.013c0.117-0.039,0.245-0.143,0.321-0.155c0.079-0.013,0.438-0.026,0.438-0.026s0.129-0.192,0.219-0.296c0.089-0.102,0.372-0.013,0.372-0.013s0.117-0.076,0.426-0.141c0.309-0.065,0.179,0.064,0.296,0.104c0.115,0.037,0.27,0.062,0.359,0.128c0.09,0.064,0,0.218-0.012,0.283c-0.014,0.064,0.219,0.038,0.23-0.026c0.014-0.064,0.077-0.128,0.207-0.205c0.128-0.078,0.025,0.114,0.076,0.231c0.052,0.116,0.129-0.157,0.129-0.026c0,0.039,0.039,0.078,0.051,0.116c0.014,0.039,0.181,0.052,0.181,0.18c0,0.13,0,0.207,0.039,0.231c0.038,0.026,0.244,0,0.335,0.155c0.089,0.154,0.154,0.013,0.205-0.052c0.052-0.064,0.231,0.026,0.283,0.078c0.052,0.05,0.193-0.104,0.387-0.155c0.192-0.051,0.167-0.039,0.219-0.115c0.051-0.078,0.09-0.283,0.205-0.438c0.115-0.153,0.271-0.424,0.271-0.631c0-0.206-0.014-0.682-0.155-0.899C18.761,21.953,18.492,21.733,18.504,21.618zM18.029,24.77c-0.065-0.013-0.207-0.062-0.207-0.062c-0.142,0.141,0.142,0.141,0.104,0.283c-0.039,0.141,0.193,0.089,0.257,0.064c0.063-0.027,0.22-0.323,0.193-0.399C18.351,24.577,18.093,24.783,18.029,24.77zM22.803,24.178c-0.052,0-0.077,0.064-0.192,0c-0.117-0.063-0.091-0.037-0.168-0.167c-0.077-0.127-0.091-0.296-0.219-0.23c-0.051,0.025,0,0.168,0.051,0.218c0.053,0.052,0.077,0.231,0.064,0.283c-0.012,0.052-0.231,0.116-0.129,0.18c0.104,0.064,0.297,0,0.271,0.078c-0.025,0.077-0.129,0.179-0.013,0.205c0.115,0.025,0.154-0.089,0.207-0.178c0.051-0.093,0.089-0.169,0.179-0.221C22.944,24.294,22.854,24.178,22.803,24.178zM22.815,21.18c0.168,0.064,0.464-0.231,0.347-0.27C23.047,20.871,22.815,21.18,22.815,21.18zM13.923,19.906c-0.029,0.115,0.193,0.167,0.206,0.039C14.141,19.816,13.949,19.803,13.923,19.906zM14.27,16.47c-0.064,0.065-0.257,0.193-0.283,0.31c-0.025,0.115,0.309-0.182,0.399-0.296c0.091-0.117,0.27-0.052,0.308-0.117c0.04-0.063,0.04-0.063,0.04-0.063s-0.142-0.025-0.257-0.063c-0.117-0.039-0.258,0.102-0.193-0.104c0.064-0.206,0.257-0.167,0.219-0.322c-0.039-0.154-0.168-0.193-0.207-0.193c-0.09,0,0.013,0.141-0.116,0.231c-0.128,0.09-0.271,0.128-0.193,0.283C14.064,16.29,14.334,16.405,14.27,16.47zM13.254,19.751c0.013-0.076-0.142-0.192-0.206-0.192c-0.065,0-0.386-0.077-0.386-0.077c-0.058,0.023-0.135,0.045-0.158,0.077c-0.007-0.011-0.022-0.024-0.049-0.039c-0.142-0.075-0.309,0-0.361-0.102c-0.05-0.104-0.127-0.104-0.179-0.039c-0.094,0.117,0.025,0.206,0.063,0.231c0.038,0.024,0.181,0.052,0.309,0.039c0.08-0.008,0.181-0.027,0.21-0.059c0.004,0.014,0.016,0.027,0.035,0.044c0.103,0.092,0.167,0.13,0.321,0.116C13.009,19.74,13.241,19.829,13.254,19.751zM12.881,18.992c0.065,0,0.193,0,0.283,0.026c0.09,0.025,0.386,0.05,0.373-0.064c-0.013-0.115-0.038-0.297,0.089-0.411c0.13-0.117,0.257-0.18,0.193-0.348c-0.063-0.167-0.193-0.271-0.103-0.349c0.09-0.076,0.192-0.102,0.192-0.166c0-0.065-0.217,0.18-0.244-0.246c-0.005-0.091-0.206,0.025-0.219,0.116c-0.012,0.091,0.142,0.167-0.103,0.167c-0.245,0-0.257,0.194-0.309,0.232c-0.052,0.039-0.103,0.051-0.207,0.076c-0.102,0.026-0.127,0.13-0.153,0.194c-0.025,0.063-0.206-0.116-0.257-0.064c-0.051,0.052-0.013,0.296,0.077,0.501C12.585,18.863,12.816,18.992,12.881,18.992zM11.979,18.928c0.065-0.077,0.038-0.192-0.063-0.18c-0.103,0.013-0.193-0.168-0.36-0.283c-0.168-0.114-0.296-0.194-0.451-0.36c-0.154-0.167-0.347-0.271-0.45-0.359c-0.104-0.091-0.257-0.13-0.322-0.116c-0.159,0.032,0.231,0.309,0.271,0.346c0.039,0.041,0.387,0.335,0.387,0.478s0.231,0.476,0.296,0.527c0.064,0.052,0.385,0.244,0.437,0.348c0.052,0.103,0.167,0.13,0.167-0.013C11.89,19.174,11.916,19.006,11.979,18.928zM11.002,17.474c0.064,0.232,0.193,0.464,0.244,0.555c0.052,0.089,0.271,0.217,0.348,0.281c0.077,0.064,0.192-0.024,0.143-0.102c-0.052-0.078-0.155-0.192-0.167-0.283c-0.013-0.091-0.078-0.233-0.181-0.387c-0.102-0.153-0.192-0.192-0.257-0.295c-0.064-0.104-0.296-0.297-0.296-0.297c-0.102,0.013-0.102,0.205-0.051,0.271C10.834,17.28,10.938,17.243,11.002,17.474z")
  }
})

