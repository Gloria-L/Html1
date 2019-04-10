#include<iostream>
using namespace std;

template <class T>
int getArrayLen(T& array)
{

return (sizeof(array) / sizeof(array[0]));

}
int main()
{
	//int A[]={1,2,5,9,8,7,6,4};
	int A[]={2,2,3};
	int n,avg, margin,num=0;
	int i=0,sum=0;
	n=getArrayLen(A);
	for(i=0;i<n;i++)
	{
		sum+=A[i];
	}
	avg=sum/n;
	for(i=0;i<n;i++)
	{
	    margin=A[i]-avg;
		if(A[i]-1==0)  num+=1;
	    else num+=margin;
	}
	cout<<num;
	return 0;
}
