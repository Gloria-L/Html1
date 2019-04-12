import java.util.Arrays;
import java.util.Comparator;
import java.util.Scanner;
import java.util.TreeSet;
 
/**
 * 小明有一袋子长方形的积木，
 * 如果一个积木A的长和宽都不大于另外一个积木B的长和宽，
 * 则积木A可以搭在积木B的上面。
 * 好奇的小明特别想知道这一袋子积木最多可以搭多少层，你能帮他想想办法吗？
 * 定义每一个长方形的长L和宽W都为正整数，并且1 <= W <= L <= INT_MAX, 袋子里面长方形的个数为N,
 * 并且 1 <= N <= 1000000.
 *
 * 假如袋子里共有5个积木分别为 (2, 2), (2, 4), (3, 3), (2, 5), (4, 5),
 * 则不难判断这些积木最多可以搭成4层, 因为(2, 2) < (2, 4) < (2, 5) < (4, 5)。
 *
 * 输入描述:
 * 第一行为积木的总个数 N
 *
 * 之后一共有N行，分别对应于每一个积木的宽W和长L
 *
 * 输出描述:
 * 输出总共可以搭的层数
 *
 * 输入例子1:
 * 5
 * 2 2
 * 2 4
 * 3 3
 * 2 5
 * 4 5
 *
 * 输出例子1:
 * 4
 *
 * idea:
 *
 * 用w（宽）对积木排序，储存在ps数组中；另外创建dpSet集合，保存某l（长）对应的最大层数。
 * 推算过程是：
 *     推算到第i个时，检查dpSet中是否有l小于等于ps[i].l的数据，
 *     若没有，添加数据（ps[i].l，1（最大层数为1））；
 *     若有相等，对应数据的最大层数+1；
 *     若有小于其的数据，取出该数据储存的层数c，把（ps[i].l，c+1）数据插入到dpSet中。
 *     每次计算都要检查清理dpSet中l（长）大于它但层数等于它的数据，
 *     因为若最大层数相同，后来者应选择l更小的。
 *     这里用TreeSet压缩查找的时间
 */
public class Main {
 
    public static void main(String[] args) {
        int N;
        Point[] pointSet;
        TreeSet<Point> pointTreeSet = new TreeSet<Point>(new PointCmpByX());
        Scanner sc = new Scanner(System.in);
        N = sc.nextInt();
        pointSet = new Point[N];
        for(int i=0; i<N; i++){
            int x, y;
            x = sc.nextInt();
            y = sc.nextInt();
            pointSet[i] = new Point(x, y);
            //System.out.println(pointSet[i]);
        }
        sc.close();
 
        Arrays.sort(pointSet, new PointCmpByXY());
        // 已经根据宽排序了，那么就只需要弄顺序比较长够不够即可
        for(int i=0; i<N; i++){
            //与上面不同，这里x是长，y是最大层数，该数据为特定长对应的最大长度
            Point current = new Point(pointSet[i].y, 1);
            Point tmp = pointTreeSet.floor(current);//宽最接近且小于pointTreeSet中的那个点，找长的最近点
            if(tmp==null){
                // 说明第一个点或者所有点都的长都大于当前的点那么，不可能再增添堆高的高度了
                pointTreeSet.add(current);
            }
            else{
                // 当前
                if(tmp.x==pointSet[i].y){
                    tmp.y++;//tmp对应长度这时候的那个堆叠厚度+1
                }
                else{
                    current.y=tmp.y+1;
                    pointTreeSet.add(current);
                }
            }
            // treeSet中的长都是特
            // 每次计算都要检查清理treeSet中l（长）大于它但层数等于它的数据，因为若最大层数相同，后来者应选择l更小的。
            if((tmp=pointTreeSet.higher(current))!=null && tmp.y==current.y)
                pointTreeSet.remove(tmp);//后续的点一定长于tmp所代表原来的点的宽，那么肯定选一个长更小的那一组即可，去掉更高的那一组
        }
        System.out.println(pointTreeSet.last().y);
    }
 
    private static class Point{
        public int x, y;
        Point(){}
        Point(int x, int y){
            this.x = x;
            this.y = y;
        }
 
        @Override
        public String toString() {
            return "["+x+" , "+y+"]";
        }
    }
 
    private static class PointCmpByX implements Comparator<Point> {
        @Override
        public int compare(Point o1, Point o2) {
            return o1.x-o2.x;
        }
    }
 
    private static class PointCmpByXY implements Comparator<Point> {
        @Override
        public int compare(Point o1, Point o2) {
            if(o1.x==o2.x)
                return o1.y-o2.y;
            return o1.x-o2.x;
        }
    }
}