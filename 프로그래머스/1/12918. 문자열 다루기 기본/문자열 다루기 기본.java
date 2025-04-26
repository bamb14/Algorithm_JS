class Solution {
    public boolean solution(String s) {
        int n=s.length();
        if(n!=4&&n!=6) return false;
        for(int i=0; i<n; i++){
            if(!Character.isDigit(s.charAt(i))) return false;
        }
        return true;
    }
}