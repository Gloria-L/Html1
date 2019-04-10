#include<iostream>
using namespace;
void Post(){
    int n;
    int m;
    cin>>n;
    int a[n];
    cin>>m;
    int b[m];
    for(int i=0;i<n;i++){
        cin>>a[i];
    }
    for(int j=0;j<m;j++){
        cin>>b[i];
    }

    for(int i=0;i<n;i++){
        if(b[j]<=a[i]){
            cout<<i<<" "<<b[j];
        }
        else if(b[j]>a[i]){
            if(b[j]-a[i]<b[j+1]){
                cout<<i<<" "<<(b[j]-a[i]);
            }
            else{

            }
        }
    }
}