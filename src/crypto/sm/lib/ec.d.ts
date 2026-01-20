export class ECPointFp {
    constructor(curve: any, x: any, y: any, z: any);
    curve: any;
    x: any;
    y: any;
    z: any;
    zinv: any;
    getX(): any;
    getY(): any;
    /**
     * 判断相等
     */
    equals(other: any): any;
    /**
     * 是否是无穷远点
     */
    isInfinity(): any;
    /**
     * 取反，x 轴对称点
     */
    negate(): ECPointFp;
    /**
     * 相加
     *
     * 标准射影坐标系：
     *
     * λ1 = x1 * z2
     * λ2 = x2 * z1
     * λ3 = λ1 − λ2
     * λ4 = y1 * z2
     * λ5 = y2 * z1
     * λ6 = λ4 − λ5
     * λ7 = λ1 + λ2
     * λ8 = z1 * z2
     * λ9 = λ3^2
     * λ10 = λ3 * λ9
     * λ11 = λ8 * λ6^2 − λ7 * λ9
     * x3 = λ3 * λ11
     * y3 = λ6 * (λ9 * λ1 − λ11) − λ4 * λ10
     * z3 = λ10 * λ8
     */
    add(b: any): any;
    /**
     * 自加
     *
     * 标准射影坐标系：
     *
     * λ1 = 3 * x1^2 + a * z1^2
     * λ2 = 2 * y1 * z1
     * λ3 = y1^2
     * λ4 = λ3 * x1 * z1
     * λ5 = λ2^2
     * λ6 = λ1^2 − 8 * λ4
     * x3 = λ2 * λ6
     * y3 = λ1 * (4 * λ4 − λ6) − 2 * λ5 * λ3
     * z3 = λ2 * λ5
     */
    twice(): any;
    /**
     * 倍点计算
     */
    multiply(k: any): any;
}
/**
 * 椭圆曲线 y^2 = x^3 + ax + b
 */
export class ECCurveFp {
    constructor(q: any, a: any, b: any);
    q: any;
    a: ECFieldElementFp;
    b: ECFieldElementFp;
    infinity: ECPointFp;
    /**
     * 判断两个椭圆曲线是否相等
     */
    equals(other: any): any;
    /**
     * 生成椭圆曲线域元素
     */
    fromBigInteger(x: any): ECFieldElementFp;
    /**
     * 解析 16 进制串为椭圆曲线点
     */
    decodePointHex(s: any): ECPointFp | null;
}
/**
 * 椭圆曲线域元素
 */
declare class ECFieldElementFp {
    constructor(q: any, x: any);
    x: any;
    q: any;
    /**
     * 判断相等
     */
    equals(other: any): any;
    /**
     * 返回具体数值
     */
    toBigInteger(): any;
    /**
     * 取反
     */
    negate(): ECFieldElementFp;
    /**
     * 相加
     */
    add(b: any): ECFieldElementFp;
    /**
     * 相减
     */
    subtract(b: any): ECFieldElementFp;
    /**
     * 相乘
     */
    multiply(b: any): ECFieldElementFp;
    /**
     * 相除
     */
    divide(b: any): ECFieldElementFp;
    /**
     * 平方
     */
    square(): ECFieldElementFp;
}
export {};
