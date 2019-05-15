module.exports.enlarge = function enlargeExtent(extent, pt) {
  const x = pt[0];
  if (x < extent.xmin) {
    extent.xmin = x;
  }
  if (x > extent.xmax) {
    extent.xmax = x;
  }

  const y = pt[1];
  if (y < extent.ymin) {
    extent.ymin = y;
  }
  if (y > extent.ymax) {
    extent.ymax = y;
  }

  if (pt.length === 3) {
    const z = pt[2];
    if (z < extent.zmin) {
      extent.zmin = pt[2];
    }
    if (z > extent.zmax) {
      extent.zmax = pt[2];
    }
  }

  return extent;
};

module.exports.enlargeExtent = function enlargeExtent(extent, ext) {
  if (ext.xmax > extent.xmax) extent.xmax = ext.xmax;
  if (ext.xmin < extent.xmin) extent.xmin = ext.xmin;
  if (ext.ymax > extent.ymax) extent.ymax = ext.ymax;
  if (ext.ymin < extent.ymin) extent.ymin = ext.ymin;
  return extent;
};

module.exports.blank = function() {
  return {
    xmin: Number.MAX_VALUE,
    ymin: Number.MAX_VALUE,
    xmax: -Number.MAX_VALUE,
    ymax: -Number.MAX_VALUE
  };
};
