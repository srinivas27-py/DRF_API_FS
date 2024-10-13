# Generated by Django 5.1.1 on 2024-09-24 07:23

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Brand_Name', models.CharField(max_length=200, null=True)),
                ('Model_Name', models.CharField(max_length=200, null=True)),
                ('Price', models.IntegerField(default=0)),
            ],
        ),
    ]
