# Generated by Django 2.0.1 on 2018-06-27 07:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dawakhana', '0015_auto_20180627_1256'),
    ]

    operations = [
        migrations.AlterField(
            model_name='salt',
            name='medicine',
            field=models.ManyToManyField(related_query_name='salt', to='dawakhana.Medicine'),
        ),
    ]
