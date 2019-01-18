package step01;

class Singleton{
  private static Singleton single;
  private Singleton() {
  };
  
  public static Singleton getSomething() {
    if(single==null) {
      single = new Singleton();
    }
      return single;
  }
  
}


public class SingletonTest {
  public static void main(String[] args) {
    Singleton single1 = Singleton.getSomething();
    Singleton single2 = Singleton.getSomething();
    System.out.println(single1==single2);
  }

}
