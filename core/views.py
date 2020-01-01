from django.shortcuts import render


# Create your views here.
# 현재 상속 되어있는 템플릿들
def home(request):
    return render(request, 'main/index.html')


def test2(request):
    return render(request, 'product_assemble/product_assemble.html')


def test3(request):
    return render(request, 'product/product.html')
