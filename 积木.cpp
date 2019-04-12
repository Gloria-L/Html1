#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;
int cmp (pair<int, int>a, pair<int, int>b);
int main(){
    long long a[1000001][2];
    long long d[1000001];
    int i,j;
    int n;
    cin>>n;
    pair<int,int> p;
    int k1,k2;
    vector<pair<int,int> > vec;
    for(i=0;i<n;i++){
        cin>>k1;
        cin>>k2;
        p=make_pair(k1,k2);
        vec.push_back(p);//把x引用的值添加到vector对象的后面
    }
    
    sort(vec.begin(), vec.end(), cmp);
    for(i=0;i<vec.size();i++){
        a[i][0]=vec[i].first;
        a[i][1]=vec[i].second;
    }
    
    
    d[1]=a[0][1];
    int len=1;
    for(int i=1;i<n;i++)
    {
        if(a[i][1]>=d[len])
            d[++len]=a[i][1];
        else
        {
            int j=lower_bound(d,d+len,a[i][1])-d;
            d[j]=a[i][1];
        }
    }
    cout<<len<<endl;
    return 0;
}

int cmp(pair<int, int>a, pair<int, int>b)
{
    return a.first<b.first;
}