# Generated by Django 2.0.1 on 2018-06-12 10:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dawakhana', '0004_auto_20180612_1547'),
    ]

    operations = [
        migrations.AddField(
            model_name='address',
            name='first_name',
            field=models.CharField(default=' ', max_length=250, verbose_name='Fisrt Name'),
        ),
        migrations.AddField(
            model_name='address',
            name='last_name',
            field=models.CharField(default='', max_length=250, verbose_name='Last Name'),
        ),
        migrations.AddField(
            model_name='address',
            name='phone',
            field=models.CharField(default='0', max_length=10),
        ),
        migrations.AddField(
            model_name='address',
            name='title',
            field=models.CharField(choices=[('MR.', 'Mr.'), ('MRS.', 'Mrs.')], default='Mr.', max_length=4, verbose_name='Title'),
        ),
    ]
