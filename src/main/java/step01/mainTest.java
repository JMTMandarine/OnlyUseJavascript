package step01;

public class mainTest {
  public static void main(String[] args) {
    
    for(int i=1;i<=9;i++) {
      if(i%4==0) {
        continue;
      }else {
        System.out.println("3*"+i+"="+3*i);
      }
    }
    
    int sum = 0;
    for(int j=1;j<=100;j++) {
      sum+=j;
    }
    System.out.println(sum);
    
    
  }
}
