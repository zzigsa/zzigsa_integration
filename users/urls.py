from django.urls import path
from . import views

app_name = "users"

urlpatterns = [
    path("login", views.LoginView.as_view(), name="login"),
    path("login/kakao", views.kakao_login, name="kakao-login"),
    path("login/kakao/callback", views.kakao_callback, name="kakao-callback"),
    path("logout", views.log_out, name="logout"),
    path("signup", views.SignUpView.as_view(), name="signup"),
    path("verify/<str:key>", views.complete_verification, name="complete-verification"),
    path("update_profile/", views.UpdateProfileView.as_view(), name="update"),
    path("update_password/", views.UpdatePassword.as_view(), name="password"),
    path('<int:pk>/', views.UserProfileView.as_view(), name='profile'),
]