/* 非对称加密 ECC */
export function ecc() {
  // 测试示例
  const p = 29,
    a = 4,
    b = 20;
  const curve = new CurveFp(p, a, b);
  const G = new Point(curve, 3, 1); // 38
  const k = 33; // 私钥
  const K = G.multiply(k); // 公钥
  console.log(`(公开)椭圆曲线E${p}(${a},${b})`);
  console.log(`(公开)基点G${G}`);
  console.log(`私钥: k =`, k);
  console.log(`公钥: K =`, K);
  const m = [
    new Point(curve, 6, 17),
    new Point(curve, 10, 4),
    new Point(curve, 10, 25),
    new Point(curve, 24, 7),
    new Point(curve, 5, 7),
  ];
  console.log(`明文: m =`, m);
  // mp = [curve.plain_embed(i) for i in m];
  // console.log("明文嵌入: mp=", mp);
  // 公钥K加密
  const r = m.map(() => Math.floor(Math.random() * (38 - 2 + 1)) + 2);
  const C1 = r.map((ri, i) => i.add(ri.multiply(K)));
  const C2 = r.map((ri, i) => ri.multiply(G));
  console.log(`密文 C1 =`, C1);
  console.log(`密文 C2 =`, C2);
  console.log(
    `解密 mm =`,
    C1.map((c1, i) => c1.add(k * C2[i].invert())),
  );
}

/**
 * 求模逆运算
 * @param {number} b - 要进行模逆运算的数
 * @param {number} p - 模数
 * @returns {number} - 模逆的结果
 */
function invMod(b, p) {
  if (b < 0 || p <= b) {
    b = b % p;
  }
  let c = b,
    d = p;
  let uc = 1,
    vc = 0,
    ud = 0,
    vd = 1,
    temp = 0;
  while (c !== 0) {
    temp = c;
    let q = Math.floor(d / c);
    c = d % c;
    d = temp;
    let newUc = ud - q * uc;
    let newVc = vd - q * vc;
    ud = uc;
    vd = vc;
    uc = newUc;
    vc = newVc;
  }
  if (ud > 0) {
    return ud;
  } else {
    return ud + p;
  }
}

/**
 * 获取数的最左边的位
 * @param {number} x - 输入的数
 * @returns {number} - 最左边的位的值
 */
function leftmostBit(x) {
  let result = 1;
  while (result <= x) {
    result = 2 * result;
  }
  return result / 2;
}

/**
 * 椭圆曲线类
 * @param {number} p - 椭圆曲线的参数 p
 * @param {number} a - 椭圆曲线的参数 a
 * @param {number} b - 椭圆曲线的参数 b
 */
class CurveFp {
  constructor(p, a, b) {
    this.p = p;
    this.a = a;
    this.b = b;
  }

  /**
   * 检查点是否在曲线上
   * @param {number} x - 点的 x 坐标
   * @param {number} y - 点的 y 坐标
   * @returns {boolean} - 如果点在曲线上返回 true，否则返回 false
   */
  containsPoint(x, y) {
    return (y * y - (x * x * x + this.a * x + this.b)) % this.p === 0;
  }

  /**
   * 显示曲线上的所有点
   * @returns {Array<Array<number>>} - 曲线上所有点的坐标数组
   */
  showAllPoints() {
    const points = [];
    for (let x = 0; x < this.p; x++) {
      for (let y = 0; y < this.p; y++) {
        if (this.containsPoint(x, y)) {
          points.push([x, y]);
        }
      }
    }
    return points;
  }

  /**
   * 字符串表示
   * @returns {string} - 曲线的字符串表示
   */
  toString() {
    return `Curve(p=${this.p}, a=${this.a}, b=${this.b})`;
  }
}

/**
 * 点类
 * @param {CurveFp} curve - 点所在的椭圆曲线
 * @param {number} x - 点的 x 坐标
 * @param {number} y - 点的 y 坐标
 * @param {number} order - 点的阶（可选）
 */
class Point {
  constructor(curve, x, y, order = null) {
    this.curve = curve;
    this.x = x;
    this.y = y;
    this.order = order;
    // 如果曲线存在，确保点在曲线上
    if (this.curve) {
    }
    if (order) {
    }
  }

  /**
   * 点相等判断
   * @param {Point} other - 要比较的另一个点
   * @returns {boolean} - 如果两个点相等返回 true，否则返回 false
   */
  equals(other) {
    if (this.curve === other.curve && this.x === other.x && this.y === other.y) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * 点相加
   * @param {Point} other - 要相加的另一个点
   * @returns {Point} - 相加后的点
   */
  add(other) {
    if (other === INFINITY) {
      return this;
    }
    if (this === INFINITY) {
      return other;
    }
    assert(this.curve === other.curve);

    if (this.x === other.x) {
      if ((this.y + other.y) % this.curve.p === 0) {
        return INFINITY;
      } else {
        return this.double();
      }
    }

    const p = this.curve.p;
    const l = ((other.y - this.y) * invMod(other.x - this.x, p)) % p;

    const x3 = (l * l - this.x - other.x) % p;
    const y3 = (l * (this.x - x3) - this.y) % p;

    return new Point(this.curve, x3, y3);
  }

  /**
   * 点乘以整数
   * @param {number} other - 要乘以的整数
   * @returns {Point} - 相乘后的点
   */
  multiply(other) {
    let e = other;
    if (this.order) {
      e = e % this.order;
    }
    if (e === 0) {
      return INFINITY;
    }
    if (this === INFINITY) {
      return INFINITY;
    }

    e *= 3;
    const negativeSelf = new Point(this.curve, this.x, -this.y % this.curve.p, this.order);
    let i = Math.floor(leftmostBit(e) / 2);
    let result = this;

    while (i > 1) {
      result = result.double();
      if ((e & i) !== 0 && (other & i) === 0) {
        result = result.add(this);
      }
      if ((e & i) === 0 && (other & i) !== 0) {
        result = result.add(negativeSelf);
      }
      i = Math.floor(i / 2);
    }
    return result;
  }

  /**
   * 重写乘法运算符
   * @param {number} other - 要乘以的整数
   * @returns {Point} - 相乘后的点
   */
  multiply(other) {
    return this * other;
  }

  /**
   * 字符串表示
   * @returns {string} - 点的字符串表示
   */
  toString() {
    if (this === INFINITY) {
      return "infinity";
    }
    return `(${this.x},${this.y})`;
  }

  /**
   * 点的双倍
   * @returns {Point} - 双倍后的点
   */
  double() {
    if (this === INFINITY) {
      return INFINITY;
    }

    const p = this.curve.p;
    const a = this.curve.a;
    const l = ((3 * this.x * this.x + a) * invMod(2 * this.y, p)) % p;

    const x3 = (l * l - 2 * this.x) % p;
    const y3 = (l * (this.x - x3) - this.y) % p;

    return new Point(this.curve, x3, y3);
  }

  /**
   * 点的逆
   * @returns {Point} - 逆点
   */
  invert() {
    if (this.y === null) {
      return new Point(null, null, null);
    }
    return new Point(this.curve, this.x, -this.y % this.curve.p);
  }
}

// 无穷远点
const INFINITY = new Point(null, null, null);

if (typeof window === "undefined") {
  // 测试示例
  const p = 29,
    a = 4,
    b = 20;
  const curve = new CurveFp(p, a, b);
  const G = new Point(curve, 3, 1); // 38
  const k = 33; // 私钥
  const K = G.multiply(k); // 公钥
  console.log(`(公开)椭圆曲线E${p}(${a},${b})`);
  console.log(`(公开)基点G${G}`);
  console.log(`私钥: k =`, k);
  console.log(`公钥: K =`, K);
  const m = [
    new Point(curve, 6, 17),
    new Point(curve, 10, 4),
    new Point(curve, 10, 25),
    new Point(curve, 24, 7),
    new Point(curve, 5, 7),
  ];
  console.log(`明文: m =`, m);
  // mp = [curve.plain_embed(i) for i in m];
  // console.log("明文嵌入: mp=", mp);
  // 公钥K加密
  const r = m.map(() => Math.floor(Math.random() * (38 - 2 + 1)) + 2);
  const C1 = r.map((ri, i) => i.add(ri.multiply(K)));
  const C2 = r.map((ri, i) => ri.multiply(G));
  console.log(`密文 C1 =`, C1);
  console.log(`密文 C2 =`, C2);
  console.log(
    `解密 mm =`,
    C1.map((c1, i) => c1.add(k * C2[i].invert())),
  );
}
