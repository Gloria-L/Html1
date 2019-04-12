#include <iostream>
#include <vector>
 
using namespace std;
 
vector<int> sts;
 
int getSums(vector<int>& preorder,int start1,int end1,vector<int>& midorder,int start2,int end2){
    if(start1>end1) return 0;
    else if(start1 == end1) {
        return preorder[start1];
    }
    int cmp = preorder[start1],mid = start2;
    for(;mid<end2;++mid)
        if(midorder[mid]==cmp) break;
    int left = getSums(preorder,start1+1,start1+mid-start2,midorder,start2,mid-1);
    int right = getSums(preorder,start1+mid-start2+1,end1,midorder,mid+1,end2);
    cmp+=left;cmp+=right;
    sts[mid] = left+right;
    return cmp;
}
 
int main(){
    vector<int> preorder,midorder;
    int tmp;
    while(true){
        scanf("%d",&tmp);
        preorder.push_back(tmp);
        if(getchar()=='\n') break;
    }
    for(int i=0;i<preorder.size();++i)
    {
        scanf("%d",&tmp);
        midorder.push_back(tmp);
    }
    sts = vector<int>(preorder.size(),0);
    getSums(preorder,0,preorder.size()-1,midorder,0,midorder.size()-1);
    cout << sts[0];
    for(int i=1;i<sts.size();++i)
        printf(" %d",sts[i]);
    cout << endl;
}