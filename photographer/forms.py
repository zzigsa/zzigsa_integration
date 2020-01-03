from django import forms
from . import models


class CreatePhotoForm(forms.ModelForm):
    class Meta:
        model = models.Photo
        fields = ("file",)

    def save(self, pk, *args, **kwargs):
        photo = super().save(commit=False)
        photographer = models.Photographer.objects.get(pk=pk)
        photo.photographer = photographer
        photo.save()


class ApplyZzigsaForm(forms.ModelForm):
    class Meta:
        model = models.Photographer
        fields = (
            "introduction",
            "title",
            "description",
            "location",
            "equip",
            "equip_picture",
            "sns",
            "profile",
        )

        widgets = {
            "introduction": forms.TextInput(attrs={'class': 'form-control', 'placeholder': '자기소개'}),
            "title": forms.TextInput(attrs={'class': 'form-control', 'placeholder': '상품이름'}),
            "description": forms.Textarea(attrs={'class': 'form-control', 'placeholder': '상품 상세설명'}),
            "location": forms.TextInput(attrs={'class': 'form-control', 'placeholder': '위치'}),
            "equip": forms.TextInput(attrs={'class': 'form-control', 'placeholder': '장비'}),
            "equip_picture": forms.FileInput(),
            "sns": forms.URLInput(attrs={'class': 'form-control', 'placeholder': 'SNS 주소'}),
            "profile": forms.FileInput(),
        }

        labels = {
            "introduction": "자기소개",
            "title": "상품이름",
            "desciption": "상세설명",
            "location": "위치",
            "equip": "장비이름",
            "equip_picture": "장비 사진",
            "sns": "SNS 주소",
            "profile": "프로필 사진",
        }

    # def save(self, *args, **kwargs):
    #     photographer = super().save(commit=False)
    #     photographer.zzigsa.zzigsa = "Not yet"
    #     photographer.save()
