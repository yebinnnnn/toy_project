# Generated by Django 4.2.11 on 2024-05-13 02:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("guestbook", "0001_initial"),
    ]

    operations = [
        migrations.RemoveField(model_name="guestbook", name="updated_at",),
    ]