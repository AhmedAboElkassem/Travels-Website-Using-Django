# Generated by Django 5.1.1 on 2024-09-27 17:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('airport', '0002_alter_signup_email'),
    ]

    operations = [
        migrations.AlterField(
            model_name='signup',
            name='email',
            field=models.EmailField(max_length=254, verbose_name='user email'),
        ),
    ]